"use client"
import Discussion from './discussion'
import Task from './task'
import Done from './done'
import Ovewview from './overview'
import {useState, useEffect} from 'react'
import { User } from '@supabase/supabase-js'

const GroupName = () => {
  const title = "Sleepy Crews"
  const tags = ["Website", "Design", "Database"];
  const formattedTags = tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1));
  const renderedTags = formattedTags.join(" / ");

  return(
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-light">{title}</h1>
      <h2 className="text-sm opacity-50 font-light">{renderedTags}</h2>
    </div>
  )
}

const ChangeSectionButtons = ({ setSection, user }: { setSection: any, user: User | null }) => {
  const [activeSection, setActiveSection] = useState("Discussion");

  function handleClick(element: any, label : string) {
    setSection(element);
    setActiveSection(label)
  }

  const menuItems = [
    { label: "Discussion", element: <Discussion user={user} />, border: true },
    { label: "Task", element: <Task />, border: true },
    { label: "Done List", element: <Done />, border: true },
    { label: "Overview", element: <Ovewview />, border: true }
  ];

  return (
    <div className="relative row-start-2 col-span-2">
      <ul className="absolute bottom-0 flex gap-5 font-light">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <button
              onClick={() => handleClick(item.element, item.label)}
              className={`py-2 border-neutral-200  ${
                activeSection === item.label ? 'border-b-1' : 'border-b-0'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const GroupInfo = ({setSection, user} : {setSection : any, user : User | null}) => {
  return(
    <header className="w-full h-52 grid grid-rows-2 grid-cols-2 border-b-1 px-10 pt-10 gap-y-10 border-neutral-700">
      <GroupName />
      <ChangeSectionButtons setSection={setSection} user={user}/>
    </header>
  )
}

export default GroupInfo