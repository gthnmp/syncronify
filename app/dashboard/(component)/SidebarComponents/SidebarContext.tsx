"use client"
import React, {createContext, useState, useContext, FC, SetStateAction} from 'react'

interface SidebarContextProps {
  isSidebarExpanded: boolean;
  updateSidebarExpanded: Function;
  selectedOption: React.JSX.Element | string;
  setOption: Function;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children } : {children : any}) => {
  const [isSidebarExpanded, updateSidebarExpanded] = useState<boolean>(false);
  const [selectedOption, setOption] = useState<React.JSX.Element | string>("div");

  return (
    <SidebarContext.Provider value={{ isSidebarExpanded, updateSidebarExpanded, selectedOption, setOption }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};