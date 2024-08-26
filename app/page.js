'use client'

import HomeCarousel from "@/components/custom/HomeCarousel";
import HomeFooter from "@/components/custom/HomeFooter";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogIn, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

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
            <h2 className='text-2xl text-light font-bold'>Welcome! {user ? user?.fullName : "Unknown"}</h2>
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
        <div className='mt-5 flex flex-col xl:flex-row xl:justify-center gap-5'>
          <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
          <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>

      {/* footer */}
      <HomeFooter />
    </div>
  );
}
