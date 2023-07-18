"use client"
import React,{ useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import SidebarMenuOptions from '@/components/SidebarMenuOptions'
import SidebarSettingOptions from '@/components/SidebarSettingOption'

function Navbar ({setSidebarSize} : {setSidebarSize : Function}){
  
  return(
    <nav className="h-screen w-20  flex flex-col items-center border-r-1 text-white border-neutral-700 b z-50 left-0">
      <SidebarMenuOptions />
      <SidebarSettingOptions/>  
    </nav>
  )
}

function ExpandedNavbarContainer({isSidebarExpanded} : {isSidebarExpanded : boolean}){
  return(
    <header className={`h-screen w-0 bg-green-700 text-white ${isSidebarExpanded ? 'grid place-items-center' : 'hidden'}`}>
      fobaro
    </header>
  )
} 

export default function Sidebar({ user }: { user: User | null }) {
  const [isSidebarExpanded, setSidebarSize] = useState<boolean>(true)
  return (
    <div className={`h-screen w-max transition-all ease-in-back duration-1000 grid grid-rows-1 ${isSidebarExpanded ? 'grid-cols-[5rem_24rem]' : 'grid-cols-[auto_0rem]'}`}>
      <Navbar setSidebarSize={setSidebarSize}/>
      <ExpandedNavbarContainer isSidebarExpanded = {isSidebarExpanded}/>
      <button className="absolute top-0 left-1/2 text-white bg-green-700" onClick={() => setSidebarSize(prev => !prev)}>Expand</button>
    </div>
  );
}
