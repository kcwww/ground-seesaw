import {
  Home,
  Newspaper,
  SquarePen,
  CalendarHeart,
  MailQuestion,
} from 'lucide-react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="flex gap-2">
          <Home /> Home
        </li>
        <li className="flex gap-2">
          <Newspaper /> Threads
        </li>
        <li className="flex gap-2">
          <CalendarHeart /> Events
        </li>
        <li className="flex gap-2">
          <MailQuestion /> Contact
        </li>
        <li className="flex gap-2">
          <SquarePen /> Posting
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
