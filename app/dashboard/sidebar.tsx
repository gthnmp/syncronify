"use client"
import React,{ useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Image, { StaticImageData } from 'next/image';
import Logo from '@/public/logo.svg';
import DefaultProfPic from '@/public/assets/DefaultProfPic.jpg';
import {
  HiOutlineSquares2X2,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from 'react-icons/hi2';
import { LuClipboardSignature } from 'react-icons/lu';
import { FiSettings } from 'react-icons/fi';
import { MdGroups } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';

const sidebarMenus = [
  { name: 'Dashboard', icon: HiOutlineSquares2X2 },
  { name: 'Notification', icon: BiBell },
  { name: 'Discussions', icon: HiOutlineChatBubbleOvalLeftEllipsis },
  { name: 'Tasks', icon: LuClipboardSignature },
  { name: 'Groups', icon: MdGroups },
];

function Menu({profPictSrc} : {profPictSrc : string | StaticImageData }) {
  return (
    <ul className="w-full h-full flex flex-col justify-between items-center">
      <Image src={Logo} alt="Syncronify Logo" width={100} height={100} className="scale-75" />
      <div className="w-full h-auto aspect-square overflow-hidden rounded-full bg-neutral-700 scale-75">
        <Image
          src={profPictSrc}
          alt="User's Profile Picture"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      {sidebarMenus.map((menu, index) => (
        <button key={index} className="flex items-center opacity-50 hover:opacity-100 transition-all duration-300 focus:opacity-100">
          {React.createElement(menu.icon, {
            className: 'scale-[1.5]',
          })}
        </button>
      ))}
    </ul>
  );
}

export default function Sidebar({ user }: { user: User | null }) {
  const [userProfilePictureSource, setProfilePictureSource] = useState<string | StaticImageData>(DefaultProfPic);

  // useEffect(() => {
    
  //   // Discord provider 
  //   if(user?.user_metadata?.avatar_url){
  //     console.log("yes")
  //     console.log(user)
  //     setProfilePictureSource(user.user_metadata.avatar_url)
  //   }

  // }, [user]);

  return (
    <nav className="h-screen w-20 flex flex-col items-center border-r-1 text-white border-neutral-700 z-50 left-0">
      <div className="w-full h-2/3 p-5">
        <Menu profPictSrc={userProfilePictureSource}/>
      </div>
      <div className="w-full h-1/2 p-5 flex flex-col gap-10 items-center justify-end">
        <FiSettings className="scale-[1.6] opacity-50 hover:opacity-100 transition-all duration-300" />
      </div>
    </nav>
  );
}