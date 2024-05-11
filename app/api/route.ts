import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userid = searchParams.get('userid');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const postid = uuidv4();
 
  try {
    if (!title || !description) throw new Error('title and description required');
    await sql`INSERT INTO POSTS (id, userid, title, description) VALUES (${postid}, ${userid}, ${title}, ${description});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ 'message':'success' }, { status: 200 });
}