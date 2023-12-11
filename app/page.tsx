"use client";
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import clsx from 'clsx';
// import {Circle2} from 'react-preloaders';
import { useEffect, useState } from 'react';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  });

  return (
    <>
    <main className="flex min-h-screen overflow-hidden flex-col p-6">
      <div className={`${styles.logoBG} flex h-20 shrink-0 items-end rounded-lg p-2 md:h-30 sticky`}>
        <Image
          src="/logo.png"
          width={60}
          height={60}
          className="block"
          alt="logo"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div className={clsx(
        // 'inline-flex items-center rounded-full px-2 py-1 text-sm',
        // {
          styles.shape,
          // 'bg-green-500 text-white': status === 'paid',
        // },
      )}/> */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className} `}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
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
