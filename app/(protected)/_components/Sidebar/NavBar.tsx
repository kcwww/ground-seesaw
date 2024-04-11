import {
  Home,
  Newspaper,
  SquarePen,
  CalendarHeart,
  MailQuestion,
} from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="flex gap-2" href="/home">
            <Home /> Home
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href="/threads">
            <Newspaper /> Threads
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href="/events">
            <CalendarHeart /> Events
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href="/contact">
            <MailQuestion /> Contact
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" href="/post">
            <SquarePen /> Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
