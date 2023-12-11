"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../ui/splash-screen";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [smScreen, setSmScreen] = useState(false)
    useEffect(() => {
       if (window.innerWidth >= 768 ) {
        setSmScreen(true)
        console.log(smScreen)
       }
      }, []);
    
    return (
        <div className="flex justify-between ">
            
                {
                        smScreen ?
                        <div className="min-h-screen w-1/2">
                            <SplashScreen />
                        </div>
                        :
                        null
                }
           
            <div className={`justify-center min-h-screen w-full md:w-1/2`}>{children}</div>
        </div>
    )
}
