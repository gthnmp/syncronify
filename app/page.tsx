import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import {BsBoxArrowUpRight} from 'react-icons/bs'
import SyncLogo from '@/public/logo.svg'

import LogoutButton from '../components/LogoutButton'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title : "Syncronify",
  description: 'A private place to connect and collaborate',
}

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const displayName = user?.user_metadata?.full_name || user?.email;

  return (
    <div className="w-full fixed top-0 flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {displayName}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <div className="flex gap-5 justify-center items-center">
            <Image src={SyncLogo} alt="Syncronify Icon"/>
            <h1 className='text-xl lg:text-2xl font-cursive'>Syncronify</h1>  
          </div>
          <h1 className="sr-only">Syncronify</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            A Private Place To<br/>{' '}
            <strong>Connect</strong> and <strong>Collaborate</strong>
          </p>
          <Link href ={user ? "/dashboard" : "/login"} className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background flex items-center gap-2">
            Open Syncronify On Your Browser
            <BsBoxArrowUpRight/>
          </Link>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="flex flex-col justify-center text-center text-xs font-thin">
          <Link href="https://github.com/gthnmp/syncronify" target="_blank" className="">
            An open source project powered by{' '}
              <strong>Supabase, NextJS, and Vercel</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}
