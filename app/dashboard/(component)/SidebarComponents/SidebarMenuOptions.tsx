"use client"
import React from "react";
import Image from 'next/image';
import profilePicture from '@/public/assets/gatan.jpg'
import Logo from '@/public/logo.svg';
import {
  HiOutlineSquares2X2,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from 'react-icons/hi2';
import { LuClipboardSignature } from 'react-icons/lu';
import { MdGroups } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';

import EditProfile from "./options/EditProfile";
import OtherStuffs from "./options/OtherStuffs";
import { useSidebar } from "./SidebarContext";


const sidebarMenus = [
  { name: 'Dashboard', icon: HiOutlineSquares2X2 },
  { name: 'Notification', icon: BiBell },
  { name: 'Discussions', icon: HiOutlineChatBubbleOvalLeftEllipsis },
  { name: 'Tasks', icon: LuClipboardSignature },
  { name: 'Groups', icon: MdGroups },
];

export default function SidebarMenuOptions() {
  const {setOption, updateSidebarExpanded} = useSidebar()


  function handleClick (buttonName : React.JSX.Element | string = <EditProfile/>){
    updateSidebarExpanded(true)
    setOption(buttonName)
  }
  
  return (
    <div className="w-full h-2/3  p-5">
      <ul className="w-full h-full flex flex-col justify-between items-center">
        <Image src={Logo} alt="Syncronify Logo" width={100} height={100} className="scale-75" />
        <button onClick={() => handleClick(<EditProfile/>)} className="w-full h-auto aspect-square overflow-hidden rounded-full bg-neutral-700 scale-75">
          <Image
            src={profilePicture}
            alt="User's Profile Picture"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </button>
        {sidebarMenus.map((menu, index) => (
          <button onClick={() => handleClick(<OtherStuffs/>)} key={index} className="flex items-center opacity-50 hover:opacity-100 transition-all duration-300 focus:opacity-100">
            {React.createElement(menu.icon, {
              className: 'scale-[1.5]',
            })}
          </button>
        ))}
      </ul>
    </div>
 );
}


