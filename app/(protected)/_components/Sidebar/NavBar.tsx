import Link from 'next/link';
import {
  Home,
  Newspaper,
  SquarePen,
  CalendarHeart,
  MailQuestion,
} from 'lucide-react';

import { ROUTES } from '@/constants/routes';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="flex gap-2" href={ROUTES.HOME}>
            <Home /> Home
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href={ROUTES.THREADS}>
            <Newspaper /> Threads
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href={ROUTES.EVENTS}>
            <CalendarHeart /> Events
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href={ROUTES.CONTACT}>
            <MailQuestion /> Contact
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href={ROUTES.POST}>
            <SquarePen /> Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
