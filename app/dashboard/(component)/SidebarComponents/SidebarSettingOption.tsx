import { FiSettings } from 'react-icons/fi';

export default function SidebarSettingOption() {
  return(
      <div className="w-full h-1/2 p-5 flex flex-col gap-10 items-center justify-end">
        <FiSettings className="scale-[1.6] opacity-50 hover:opacity-100 transition-all duration-300" />
      </div>
     
  ) 
}
