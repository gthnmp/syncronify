import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import {BsArrowLeft} from 'react-icons/bs'
import { TbLogin } from 'react-icons/tb'
import { metadata } from '../layout'

export default async function Dashboard() {
  metadata.title = "Dashboard ━ Syncronify";
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col h-screen justify-center items-center gap-14 opacity-0 max-w-4xl px-3  text-foreground">
        {user ? (
          <div className="flex flex-col items-center justify-center mb-4 lg:mb-12">
            <h1 className="sr-only">Syncronify</h1>
            <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
              Hey There, You Are<br/>{' '}
              <strong>{user?.email}</strong>
            </p>
            <div className='flex gap-5 items-center justify-between'>
              <Link href ="/" className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background flex items-center gap-2">
                <BsArrowLeft/>
                Back To Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mb-4 lg:mb-12">
            <h1 className="sr-only">Syncronify</h1>
            <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
              You need to Login or Create An Account{' '}
              to access this page
            </p>
            <div className='flex gap-5 items-center justify-between'>
              <Link href ="/login" className="bg-green-500 py-3 px-6 rounded-lg font-mono text-sm text-background flex items-center gap-2">
                Login
                <TbLogin/>
              </Link>
            </div>
          </div>
        )}
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    </div>
  )
}
