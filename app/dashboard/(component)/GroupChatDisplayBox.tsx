import React, {useState, useEffect, useRef} from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Message = {
  id: string;
  sender: string;
  content: string;
  created_at: string;
}

const GroupChatDisplayBox: React.FC = () => {
  const [ messagesList, setMessagesList ] = useState<Message[]>([])
  const ref = useRef<HTMLLIElement>(null)
  const supabase = createClientComponentClient()
    
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
      setMessagesList((prevMessages:Message[]) => [...prevMessages, payload.new]);
    }).subscribe()

  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesList]);

  return (
    <main className="h-full w-full overflow-hidden max-h-full font-sans font-normal bg-neutral-800 py-4">
      <ul className="flex flex-col w-full h-full gap-1 px-5 overflow-scroll">
        {messagesList.map((msg) => (
          <li key={msg.id} id={msg.id} ref ={ref} className="flex p-2 gap-4">
            <div className="w-10 h-10 aspect-square rounded-full bg-neutral-700"></div>
            <div className="rounded bg-neutral-700 py-2 px-4">
              <h2 className='text-blue-400'>{msg.sender}</h2>
              <p>{msg.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default GroupChatDisplayBox;
