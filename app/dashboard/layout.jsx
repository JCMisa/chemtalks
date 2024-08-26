import React from "react";
import Header from "./_components/Header";
import ButtomNav from "./_components/ButtomNav";

const DashboardLayout = ({ children }) => {
    return (
        <div className="">
            <div className='py-10 px-3'>
                <div className='hidden xl:block'>
                    <Header />
                </div>
                {children}
            </div>
            <div className="fixed w-full bottom-0 xl:hidden">
                <ButtomNav />
            </div>
        </div>
    );
};

export default DashboardLayout;