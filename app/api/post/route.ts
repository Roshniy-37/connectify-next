// import { sql } from '@vercel/postgres';
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try{
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get("userid")?.toString();

  const posts = await prisma.post.findMany({
    where: {
      userid:user_id,
    },
  });

  return NextResponse.json(posts);
  // try {

  //   const rows = await sql`SELECT * from POSTS where userid like ${userid}`;
  //   return NextResponse.json({rows}, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
}catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
