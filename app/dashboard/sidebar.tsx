"use client"
import React,{ useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import SidebarMenuOptions from '@/components/SidebarMenuOptions'
import SidebarSettingOptions from '@/components/SidebarSettingOption'

export default function Sidebar({ user }: { user: User | null }) {
  const [isSidebarExpanded, setSidebarSize] = useState<boolean>(true)
  return (
    <div className={`h-screen bg-red-500 w-max grid grid-rows-1 ${isSidebarExpanded ? 'grid-cols-[5rem_24rem]' : 'grid-cols-[auto_0rem]'}`}>
      <nav className="h-screen w-20  flex flex-col items-center border-r-1 text-white border-neutral-700 b z-50 left-0">
        <SidebarMenuOptions />
        <SidebarSettingOptions/>  
      </nav>
      <header className={`h-screen w-0 bg-green-700 text-white ${isSidebarExpanded ? 'grid place-items-center' : 'hidden'}`}>
        fobaro
      </header>
    </div>
  );
}
