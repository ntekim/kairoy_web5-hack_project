"use client";

import {
  // UserGroupIcon,
  HomeIcon,
  PlusIcon,
  // MagnifyingGlassIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/me', icon: HomeIcon },
  {
    name: 'Post',
    href: '/me/new-post',
    icon: PlusIcon,
  },
  {
    name: 'Chat',
    href: '/me/messages',
    icon: ChatBubbleLeftRightIcon,
  }, 
  {
    name: 'Notification',
    href: '/me/notifications',
    icon: BellIcon,
  },
  { 
    name: 'Profile', 
    href: '/me/profile', 
    icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-2 text-sm font-medium hover:bg-sky-100 hover:text-fuchsia-700 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-grey-50': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 font-bold" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
