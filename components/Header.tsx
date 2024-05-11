"use client"
import { SignInButton, SignedIn, SignedOut, UserButton, useClerk, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Bell, BellRing, Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import {  toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { sql } from '@vercel/postgres';
   

function Header() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const router = useRouter()
    const path = usePathname()
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user)
    async function createPost(){
        const response = await fetch(`/api?userid=${user?.username}&title=${title}&description=${description}`)
        if(response.status==200){
            toast.success('Post has been added')
        }
    }

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
        <div className='flex items-center gap-4'>
        {addNewPost()}
        <UserButton/>
        </div>
      
      </SignedIn>
    </div>
  )

    function addNewPost() {
        return <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                    <DialogDescription>
                        Express your thoughts
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input onChange={(e)=>setTitle(e.target.value)}
                            id="name"
                            placeholder="I am Hero"
                            className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                           Description
                        </Label>
                        <Input onChange={(e)=>setDescription(e.target.value)}
                            id="description"
                            placeholder="Your friendly neighbourhood Spiderman"
                            className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={()=>createPost()} type="submit">Post</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>;
    }
}

export default Header
