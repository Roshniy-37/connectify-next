/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react'
import Post from '@/components/post';

function page({ params }: { params: { username: string } }) {
  const fallbackPost = [{
    id: '6f22e9fa-0ac3-4036-b682-57814871f535',
    userid: 'roshni',
    title: 'No Posts',
    description: 'Add new Posts',
    added: ''
  }];
    const [posts, setPosts] = useState<any[]>(fallbackPost);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post?userid=${params.username}`);
        if (!response.ok) throw new Error('Network error');

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setPosts(fallbackPost); 
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts(fallbackPost); 
      }
    };
    fetchData();
  }, [params.username]);
    
  return (
    <div className='grid grid-cols-3 gap-5'>
       {posts.map((post:{id:string, title:string, description: string, added: any})=>(
        <Post key={post.id} title={post.title} description={post.description} added={post.added.toString()}/>
       ))}
    </div>
  )
}

export default page
