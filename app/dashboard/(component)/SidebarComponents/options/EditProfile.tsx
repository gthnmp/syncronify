'use client'
import Image from "next/image"
import ProfilePicture from '@/public/assets/gatan.jpg'
import { User } from '@supabase/supabase-js';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useState, useEffect } from "react";

function EditProfileForm(){
  const [username, setUsername] = useState<string | undefined>(undefined && 'memeklah');
  const [fullname, setFullname] = useState<string | undefined>(undefined && 'memeklah');
  const [about, setAbout] = useState<string | undefined>(undefined && 'memeklah');
  const supabase = createClientComponentClient()

  supabase.auth.getUser().then(value => {
    if(value?.data.user){
      setUsername(value.data.user.email)
      setFullname('Viole Grace')
      setAbout("Trying to do better")
    }
  }).catch((err) => (
    console.error("lo kontol : ", err)
  ))

  return(
    <form action="" className="flex flex-col gap-5">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="relative py-1 bg-transparent text-white border-b-2 border-white font-light text-xl"
      />
      <input
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}

        placeholder="name"
        className="relative py-1 bg-transparent text-white border-b-2 border-white font-light text-xl"
      />
      <input
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="about"
        className="relative py-1 bg-transparent text-white border-b-2 border-white font-light text-xl"
      />
    </form>
  )
} 

function EditProfilePicture(){
  return(
    <div className="w-40 h-auto aspect-square rounded-full overflow-hidden">
      <Image
        src={ProfilePicture}
        alt={"User profile picture"}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function Title ({text} : {text : string}){
  return(
    <h1 className="line font-light text-2xl">
      <div className="word">
        {text}
      </div>
    </h1>
  )
}

export default function EditProfile (){
  return(
    <section className="flex flex-col items-center gap-10">
      <Title text="Profile"/>
      <EditProfilePicture/>
      <EditProfileForm/>
    </section>
  )
}