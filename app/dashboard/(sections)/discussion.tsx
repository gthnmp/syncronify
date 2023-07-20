import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { User, createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);



interface ChatDisplayBoxProps {
  user? : User | null;
  message : string;
  messagesList : Message[]
  setMessagesList : Function;
}

const ChatDisplayBox : React.FC<ChatDisplayBoxProps> = ({ user, message, messagesList, setMessagesList }) => {
  const ref = useRef<HTMLLIElement>(null)
  const regexPattern = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.\d{6}$/;
  
  const formatTimestamp = (timestamp:string) => {
    const match = timestamp.match(regexPattern);
    if (match) {
      const [, date, time] = match;
      return `${date} ${time}`;
    }
    return timestamp;
  };
  
  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from('messages').select('*');
      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessagesList(data || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  
    supabase.channel('messages').on('postgres_changes', {event:"*", schema:"*"}, (payload) => {
      // console.log('Something changed: ', payload)
      setMessagesList((prevMessages:Message[]) => [...prevMessages, payload.new]);
    }).subscribe()

  }, [message]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesList]);

  return (
    <ul className="flex flex-col w-full h-full gap-4 font-light overflow-scroll">
      {messagesList.map((msg) => (
        <li key={msg.id} id={msg.id} ref ={ref} className="flex p-2 gap-4 items-center">
          <div className="w-10 h-10 aspect-square rounded-full bg-gray-700"></div>
          <div>
            <div className="flex gap-2">
              <h2>{msg.sender}</h2>
              <h3>{formatTimestamp(msg.created_at)}</h3>
            </div>
            <p>{msg.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const FormSendChat = ({ user, message, setMessage }: { user: User | null, message:string, setMessage:Function }) => {
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(message){
      try {
        const { data, error } = await supabase.from('messages').insert({
          sender: user?.email,
          content: message,
        });
        if (error) {
          console.error('Error sending message:', error);
        } else {
          console.log('Message sent successfully:', data);
          setMessage('');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <form className="w-full h-full flex items-center gap-2" onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="text-white font-light bg-neutral-950 focus:border-2 border-blue-600 rounded-lg w-full h-full px-5"
      />
      <button type="submit" className="w-auto h-full aspect-square bg-neutral-950 rounded-lg grid place-items-center">
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default function DiscussionBoard({ user }: { user: User | null }) {
const [messagesList, setMessagesList] = useState<Message[]>([]);
const [message, setMessage] = useState<string>('');

return (
  <section className="w-full h-full text-white py-5 px-10 grid grid-cols-1 grid-rows-[24rem_2.5rem] gap-y-5">
    <ChatDisplayBox user={user} message={message} messagesList={messagesList} setMessagesList={setMessagesList}/>
    <FormSendChat user={user} message={message} setMessage={setMessage} />
  </section>
);
}
