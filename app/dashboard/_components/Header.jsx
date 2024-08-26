"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChartColumn, Gamepad2, Home, LayoutGrid, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const path = usePathname();

    const menuList = [
        {
            id: 1,
            name: "Home",
            icon: <Home />,
            path: "/",
        },
        {
            id: 2,
            name: "Play",
            icon: <Gamepad2 />,
            path: "/dashboard/play",
        },
        {
            id: 3,
            name: "Dashboard",
            icon: <LayoutGrid />,
            path: "/dashboard",
        },
        {
            id: 4,
            name: "Leaderboard",
            icon: <ChartColumn />,
            path: "/dashboard/leaderboard",
        },
        {
            id: 5,
            name: "Setting",
            icon: <Settings />,
            path: "/dashboard/setting",
        },
    ];

    return (
        <div className="p-5 flex flex-row justify-between items-center border shadow-md">
            <div className='flex flex-row items-center gap-3'>
                <img src={"https://dummyimage.com/720x600"} alt="logo" width={30} height={30} onClick={() => router.replace('/')} />
                <p className='logo-text text-lg font-bold'>Chemistricks</p>
            </div>
            <div className='flex items-center gap-5'>
                {
                    menuList.map((menu, index) => (
                        <Link href={menu.path} key={menu.id || index}>
                            <div className="py-3">
                                <h2
                                    className={`flex gap-1 p-2 text-gray-400 font-medium  cursor-pointer rounded-md hover:text-light hover:bg-primary-200 transition-all mb-2 ${path == menu.path && "text-light linear-bg"
                                        }`}
                                >
                                    {menu.icon}
                                </h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <UserButton />
        </div>
    );
};

export default Header;