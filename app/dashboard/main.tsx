"use client"
import { User } from "@supabase/supabase-js";
import React, {useState} from 'react'
import Discussion from "./(component)/MainComponent/discussion";
import GroupInfo from "./(component)/MainComponent/GroupInfo";
import GroupSection from "./(component)/MainComponent/GroupSection";

interface MainProps {
  user: User | null;
}

export default function Main({ user }: MainProps) {
  const [currentSection, setSection] = useState(<Discussion user={user}/>)
  return (
    <article className="w-full h-screen text-white grid grid-cols-1 auto-rows-[auto_1fr] rounded-lg bg-neutral-900 font-sans overflow-hidden">
      <GroupInfo setSection={setSection} user={user}/>
      <GroupSection element={currentSection} user={user}/>
    </article>
  );
}
