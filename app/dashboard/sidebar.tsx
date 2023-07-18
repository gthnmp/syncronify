"use client"
import React,{ useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Image, { StaticImageData } from 'next/image';
import DefaultProfPic from '@/public/assets/gatan.jpg';
import { FiSettings } from 'react-icons/fi';
import SidebarMenuOptions from '@/components/SidebarMenuOptions'
import SidebarSettingOptions from '@/components/SidebarSettingOption'

export default function Sidebar({ user }: { user: User | null }) {
  const [userProfilePictureSource, setProfilePictureSource] = useState<string | StaticImageData>(DefaultProfPic);

  return (
    <nav className="h-screen w-20 flex flex-col items-center border-r-1 text-white border-neutral-700 z-50 left-0">
    <SidebarMenuOptions profPictSrc={userProfilePictureSource}/>
    <SidebarSettingOptions/>  
   </nav>
  );
}
