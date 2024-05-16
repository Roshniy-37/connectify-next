// import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userid = searchParams.get('userid')?.toString();
  const title = searchParams.get('title')?.toString();
  const description = searchParams.get('description')?.toString();

  const response = await prisma.post.create({
    data: {
      userid: userid || "",
      title: title || "",
      description: description || ""
    }
  })

 
  // try {
  //   if (!title || !description) throw new Error('title and description required');
  //   await sql`INSERT INTO POSTS (id, userid, title, description) VALUES (${postid}, ${userid}, ${title}, ${description});`;
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
 
  return NextResponse.json({ 'message':'success' }, { status: 200 });
}