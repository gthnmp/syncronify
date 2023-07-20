"use client"
import { User } from "@supabase/supabase-js";
import React, {useState} from 'react'
import Discussion from "./(sections)/discussion";
import GroupInfo from "./(component)/GroupInfo";
import GroupSection from "./(component)/GroupSection";
import GroupChatDisplayBox from "./(component)/GroupChatDisplayBox";
import GroupChatHeader from "./(component)/GroupChatHeader";
import GroupChatSendMessage from "./(component)/GroupChatSendMessage";

interface MainProps {
  user: User | null;
}

export default function Main({ user }: MainProps) {
  const [currentSection, setSection] = useState(<Discussion user={user}/>)
  return (
    <article className="w-full h-screen overflow-scroll grid grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg bg-neutral-800  text-white font-sans">
      <GroupChatHeader/>
      <GroupChatDisplayBox/>
      <GroupChatSendMessage/>
    </article>
  );
}

{/* <GroupInfo setSection={setSection} user={user}/> */}
{/* <GroupSection element={currentSection} user={user}/> */}
