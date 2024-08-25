"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <div className="p-5 flex flex-row justify-between items-center border shadow-md">
            <img src={"https://dummyimage.com/720x600"} alt="logo" width={30} height={30} onClick={() => router.replace('/')} />
            <UserButton />
        </div>
    );
};

export default Header;