import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userid = searchParams.get('userid');
 
  try {

    const rows = await sql`SELECT * from POSTS where userid like ${userid}`;
    return NextResponse.json({rows}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  
}