"use client";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
// import {Circle2} from 'react-preloaders';
import { useEffect, useState } from 'react';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';
import HeartIcon from '@heroicons/react/24/outline';

export default function Me() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  });

  return (
    <>
    <main className="flex flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-fuchsia-50 px-6 py-10 md:w-2/5 md:px-20">
            <Image
                src="/hero-desktop.png"
                width={1000}
                height={760}
                // fill={true}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                style={{objectFit: "contain"}}
                className="block md:block"
                alt="post image"
            />
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-fuchsia-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-14 h-6 text-fuchsia-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <div className="flex justify-end w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-fuchsia-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
            </div>
            


        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="block md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
    {/* <Circle2 background="#BA7ABA" customLoading={loading} animation="fade" color='#800080' /> */}
    </>
  );
}
