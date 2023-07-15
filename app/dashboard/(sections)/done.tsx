import {AiOutlineSend} from 'react-icons/ai'
export default function Done(){
  return(
    <section className="w-full h-full text-white p-10 grid grid-cols-1 grid-rows-[auto_2.5rem]">
      <h1 className="text-4xl font-bold w-full h-full">Done List</h1>
      <div className='w-full h-full flex items-center gap-2'>
        <input type="text" placeholder="Message" className="text-white font-light bg-neutral-950 focus:border-2 border-blue-600 rounded-lg w-full h-full px-5 "/>
        <button className='w-auto h-full aspect-square bg-neutral-950 rounded-lg grid place-items-center'><AiOutlineSend/></button>
      </div>
    </section>
  )
}