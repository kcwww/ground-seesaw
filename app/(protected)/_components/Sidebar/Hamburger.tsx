import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import NavBar from './NavBar';

const SHEET_SIDE = 'left';

const Hamburger = () => {
  return (
    <Sheet key={SHEET_SIDE}>
      <SheetTrigger asChild className="md:hidden fixed bottom-4 left-4 z-50">
        <Button className="rounded-lg">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-gray-700 px-4 py-6 border-r border-gray-700"
        side={SHEET_SIDE}
      >
        <NavBar />
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
