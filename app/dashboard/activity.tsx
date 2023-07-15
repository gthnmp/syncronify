import { User } from "@supabase/supabase-js"
import { BsArrowLeft } from "react-icons/bs"
import Link from "next/link"

const Content = ({user} : {user : User | null}) => {
  return(
    <main className="animate-in flex flex-col w-full  h-full justify-start items-center py-10 opacity-0 px-3 text-foreground ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="sr-only">Syncronify</h1>
        <p className="text-lg lg:text-xl !leading-tight text-center">
          Hey There, You Must Be<br/>{' '}
          <strong>{user?.email}</strong>
        </p>
        <div className='flex gap-5 items-center justify-between'>
          <Link href ="/" className="bg-foreground py-2 px-4 rounded-lg font-mono text-sm text-background flex items-center gap-2">
            <BsArrowLeft/>
            Back To Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function Activity ({user} : {user : User | null}){
  return(
    <div className="right-0 w-80 z-50 h-screen rounded-lg bg-neutral-900">
      <Content user={user}/>
    </div>
  )
}