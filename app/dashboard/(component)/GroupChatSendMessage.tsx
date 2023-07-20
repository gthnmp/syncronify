"use client"
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { ImAttachment } from 'react-icons/im'
import { BsEmojiKiss } from 'react-icons/bs'
import { User, createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import SupabaseClient from '@supabase/supabase-js';

interface UserProfile {
  id: any;
  username: string;
  full_name: string;
  avatar_url: string;
  bio:string;
}

interface Message {
  sender: string;
  content: string;
}


const GroupChatSendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const supabase =  createClientComponentClient()
 
  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data: {user}, error } = await supabase.auth.getUser();
      if (error) {
        throw error;
      }
  
      if (user) {
        const { data: userProfile, error: profileError } = await supabase
          .from('profiles')
          .select()
          .eq('id', user.id)
          .single();
        
        if (profileError) {
          throw profileError;
        }
  
        const { data: newMessage, error: messageError } = await supabase
          .from('messages')
          .insert({
            sender: userProfile.username,
            content: message,
          });
  
        if (messageError) {
          throw messageError;
        }
  
        console.log('Message sent successfully:', newMessage);
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <footer className="h-16 w-full bg-neutral-900 p-3 font-sans font-normal">
      <form onSubmit={sendMessage} className='w-full h-full flex gap-4'>
        <BsEmojiKiss 
          aria-label='Emojis'
          onClick={() => alert('emoji')}
          className='h-full w-auto aspect-square fill-neutral-300 scale-75 hover:cursor-pointer '
          />
        <ImAttachment 
          aria-label='Attachment'
          onClick={() => alert('attachment')}
          className='h-full w-auto aspect-square fill-neutral-300 scale-75 hover:cursor-pointer '
          />
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Send Message'
          className='w-full h-full rounded-lg bg-neutral-950 text-neutral-300 px-2 focus:outline-none'
        />
        <button 
          type='submit' 
          className='w-auto h-full aspect-square rounded-lg grid place-items-center'
        >
          <AiOutlineSend className='h-full w-auto aspect-square fill-neutral-300 scale-75'/>
        </button>
      </form>
    </footer>
  );
};

export default GroupChatSendMessage;
