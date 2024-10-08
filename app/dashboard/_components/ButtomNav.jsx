'use client'

import React from "react";
import { ChartColumn, Gamepad2, Home, LayoutGrid, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ButtomNav = () => {
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
            path: "/play",
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

    const path = usePathname();

    return (
        <div className="shadow-lg min-h-20 border-t bg-dark-100">
            <div className="flex gap-5 sm:gap-10 justify-center items-center text-center">
                {menuList.map((menu, index) => (
                    <Link href={menu.path} key={menu.id || index}>
                        <div className="py-3">
                            <h2
                                className={`flex gap-1 sm:gap-5 items-center text-gray-400 font-medium p-2 sm:p-5 cursor-pointer rounded-md hover:text-light hover:bg-primary-200 transition-all mb-2 ${path == menu.path && "text-light linear-bg"
                                    }`}
                            >
                                {menu.icon}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ButtomNav;