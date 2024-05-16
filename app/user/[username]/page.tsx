'use client'
import React, { useEffect, useState } from 'react'
import { sql } from "@vercel/postgres";
import Post from '@/components/post';

function page({ params }: { params: { username: string } }) {
    const [posts, setPosts]= useState<any>([{
        id: '6f22e9fa-0ac3-4036-b682-57814871f535',
        userid: 'roshni',
        title: 'New1',
        description: 'This is my post',
        added: '2024-05-11T10:37:07.934Z'
      }])
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`/api/post?userid=${params.username}`)
            const data = await response.json()
            setPosts(data)
            console.log(data)
        }
        fetchData();
    },[])
    
  return (
    <div className='grid grid-cols-3 gap-5'>
       {posts.map((post:{id:string, title:string, description: string, added: any})=>(
        <Post key={post.id} title={post.title} description={post.description} added={post.added.toString()}/>
       ))}
    </div>
  )
}

export default page
