"use client"
import { SignInButton, SignedIn, SignedOut, UserButton, useClerk, useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Bell, BellRing, Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

function Header() {
    const router = useRouter()
    const path = usePathname()
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user)
    // useEffect(()=>{
    //     if(user){
    //         router.replace(`/${user.username}`)
    //     }
    // },[user])

  return (
    <div className='flex border-b items-center justify-between px-4 text-lg bg-white text-black h-[8vh] w-full'>
      <h1>Connectify</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search" />
      <Button type="submit"><Search size={20}/></Button>
      </div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default Header
