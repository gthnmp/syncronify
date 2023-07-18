"use client"
import React,{ useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import SidebarMenuOptions from './(component)/SidebarComponents/SidebarMenuOptions'
import SidebarSettingOptions from './(component)/SidebarComponents/SidebarSettingOption'
import EditProfile from './(component)/SidebarComponents/options/EditProfile';
import {AiOutlineClose} from 'react-icons/ai'
import { SidebarProvider, useSidebar } from './(component)/SidebarComponents/SidebarContext';

function Navbar() {
  const { updateSidebarExpanded } = useSidebar();

  return (
    <nav className="h-full w-20 flex flex-col items-center border-r-1 text-white border-neutral-700 b z-50 left-0">
      <SidebarMenuOptions  />
      <SidebarSettingOptions />
    </nav>
  )
}

function ExpandedNavbarContainer() {
  const { updateSidebarExpanded ,isSidebarExpanded, selectedOption } = useSidebar();
  console.log(selectedOption)
  
  return (
    <header className={`relative h-screen w-full text-white ${isSidebarExpanded ? 'grid place-items-center' : 'hidden'}`}>
      {selectedOption}
      <AiOutlineClose
        className='absolute top-10 right-10 scale-150 hover:cursor-pointer'
        onClick={() => updateSidebarExpanded(false)}
      />
    </header>
  )
}

function Container (){
  const { isSidebarExpanded } = useSidebar();
  return(
    <div className={`h-screen w-max transition-all ease-in-back duration-1000 grid grid-rows-1 ${isSidebarExpanded ? 'grid-cols-[5rem_24rem]' : 'grid-cols-[auto_0rem]'}`}>
      <Navbar />
      <ExpandedNavbarContainer />
    </div>
  )
}

export default function Sidebar({ user }: { user: User | null }) {
  return (
    <SidebarProvider>
      <Container/>
    </SidebarProvider>
  );
}