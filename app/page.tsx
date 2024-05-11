"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Bell, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <main className="h-[90vh] w-full flex justify-center items-center flex-row">
      <div className="h-full w-1/2 flex justify-center flex-col p-20">
        <h1 className="text-5xl font-bold pb-5 ">Connect with Connectify</h1>
        <h1 className="text-sm text-zinc-600 pb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati similique quibusdam eum cumque minus ex ipsam fuga, voluptates dolorem!</h1>
        <Button 
          onClick={() => {
            router.push(`/user/${user?.username}`);
          }}
        >
          <User size={20} className="mr-2" /> Your Profile{" "}
        </Button>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <Image src={'/img-c-1.png'} alt="image1" height={600} width={600}/>
      </div>
    </main>
  );
}
