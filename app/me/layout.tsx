"use client";

import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '../ui/dashboard/topnav';
import { useEffect, useState } from 'react';
import BottomNav from '../ui/dashboard/bottomNav';


export default function Layout({ children }: { children: React.ReactNode }) {
    const [smScreen, setSmScreen] = useState(false)
    useEffect(() => {
       if (window.innerWidth <= 768){
        setSmScreen(true)
       }
      }, []);
    
    return (
    <>
        <div className='w-full'>
            <TopNav />
        </div>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-40">
                {
                    smScreen  ? 
                    (
                        <BottomNav />
                    ):
                        <SideNav />
                }
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    </>
    
  );
}