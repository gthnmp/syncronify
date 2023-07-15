import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { TbLogin } from 'react-icons/tb'

import Sidebar from './sidebar'
import Main from './main'
import Activity from './activity'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title : "Dashboard ━ Syncronify",
  description: 'A private place to connect and collaborate',
}

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  
  return (
    <>{user ? (
        <div className='w-screen h-full grid grid-cols-[5rem_auto_20rem] grid-rows-1 gap-x-1'>
          <Sidebar user={user}/>
          <Main user={user}/>
          <Activity/>
        </div>
      ) : (
        <div className="flex flex-col items-center w-screen h-screen text-white justify-center">
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
    </>
  )
}
