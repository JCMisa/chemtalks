'use client'

import React, { useEffect } from "react";
import HomeCarousel from "@/components/custom/HomeCarousel";
import HomeFooter from "@/components/custom/HomeFooter";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { Player } from "@/utils/schema";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogIn, Rocket } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { eq } from "drizzle-orm";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && addPlayer();
  }, [user])

  const addPlayer = async () => {
    try {
      const existingPlayer = await db.select()
        .from(Player)
        .where(eq(Player?.email, user?.primaryEmailAddress?.emailAddress));

      if (existingPlayer.length > 0) {
        toast(
          <p className='text-yellow-500 text-sm font-bold'>Player already exists!</p>
        )
        return;
      } else {
        const result = await db.insert(Player).values({
          email: user?.primaryEmailAddress?.emailAddress,
          name: user?.fullName,
          image: user?.imageUrl,
          createdAt: moment().format('MM-DD-yyyy'),
          points: 0,
          username: user?.firstName
        })
        if (result) {
          toast(
            <p className='text-green-500 text-sm font-bold'>Player added successfully!</p>
          )
        }
      }
    } catch (error) {
      toast(
        <p className='text-red-500 text-sm font-bold'>Internal error occured while saving the player</p>
      )
    }
  }

  return (
    <div className="relative">
      {/* user button */}
      {
        user &&
        <div className='absolute top-3 right-3 z-50'>
          <UserButton />
        </div>
      }
      <HomeCarousel />
      <div className="mt-3 p-5">
        {/* header and description texts */}
        <div className='flex flex-row items-center justify-between'>
          {user ? (
            <div className='flex flex-col'>
              <h2 className='text-lg text-light font-bold'>Welcome!</h2>
              <p className='text-2xl logo-text'>{user ? user?.fullName : "Unknown"}</p>
            </div>
          ) : (
            <h2 className='text-2xl text-light font-bold'>Game Title</h2>
          )}
          {user ? (
            <Button onClick={() => router.push('/dashboard')} className='felx flex-row items-center gap-3'>
              <p>Get Started</p> <Rocket />
            </Button>
          ) : (
            <Button onClick={() => router.push('/sign-in')} className='flex flex-row items-center gap-3'>
              <p>Sign-in</p> <LogIn />
            </Button>
          )}
        </div>
        <p className='text-light-100 text-xs mt-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure provident quas labore, eum excepturi in eius dicta ipsum distinctio beatae reprehenderit a? Distinctio, hic tenetur necessitatibus obcaecati sed quis rem eaque quam quos laborum molestias eum amet earum ducimus nisi animi totam iste nemo laboriosam quidem quaerat minima error. Numquam.
        </p>
        {/* row information */}
        <div className="mt-3 flex flex-col">
          <div className='flex flex-row gap-3 items-center'>
            <p className='text-gray-500 text-xs'>Developers</p>
            <p className='text-light-100 text-xs font-bold'>Section Name</p>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <p className='text-gray-500 text-xs'>Purpose</p>
            <p className='text-light-100 text-xs font-bold'>Project Name</p>
          </div>
        </div>
        {/* cards and get started button */}
        <div className='mt-3'>
          <div className='flex flex-row items-center gap-3'>
            <div className='py-2 px-4 text-light text-xs rounded-full bg-green-500'>Chemistry</div>
            <div className='py-2 px-4 text-light text-xs rounded-full bg-yellow-500'>Quiz App</div>
            <div className='py-2 px-4 text-light text-xs rounded-full bg-primary-200'>Educational Game</div>
          </div>
        </div>
        {/* video game highlights */}
        <div className='mt-5 flex flex-col xl:flex-row flex-wrap xl:justify-center gap-5'>
          <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
          <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>

      {/* footer */}
      <HomeFooter />
    </div>
  );
}
