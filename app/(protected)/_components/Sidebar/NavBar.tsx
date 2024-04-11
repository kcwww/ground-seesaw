'use client';

import Link from 'next/link';
import {
  Home,
  Newspaper,
  SquarePen,
  CalendarHeart,
  MailQuestion,
} from 'lucide-react';

import { ROUTES } from '@/constants/routes';

interface NavBarProps {
  close?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ close }: NavBarProps) => {
  const closeHandler = (value: boolean) => {
    if (close) {
      close(value);
    }
  };

  return (
    <nav>
      <ul className="flex flex-col gap-10 p-4">
        <li onClick={() => closeHandler(false)}>
          <Link className="flex gap-2 dark:text-gray-200" href={ROUTES.HOME}>
            <Home /> Home
          </Link>
        </li>
        <li onClick={() => closeHandler(false)}>
          <Link className="flex gap-2 dark:text-gray-200" href={ROUTES.THREADS}>
            <Newspaper /> Threads
          </Link>
        </li>
        <li onClick={() => closeHandler(false)}>
          <Link className="flex gap-2 dark:text-gray-200" href={ROUTES.EVENTS}>
            <CalendarHeart /> Events
          </Link>
        </li>
        <li onClick={() => closeHandler(false)}>
          <Link className="flex gap-2 dark:text-gray-200" href={ROUTES.CONTACT}>
            <MailQuestion /> Contact
          </Link>
        </li>
        <li onClick={() => closeHandler(false)}>
          <Link className="flex gap-2 dark:text-gray-200" href={ROUTES.POST}>
            <SquarePen /> Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
