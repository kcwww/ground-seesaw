'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import NavBar from './NavBar';
import SideBarHeader from './SideBarHeader';

const SHEET_SIDE = 'left';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet key={SHEET_SIDE} open={open}>
      <SheetTrigger asChild className="md:hidden fixed bottom-4 left-4 z-50">
        <Button onClick={() => setOpen(true)} className="rounded-full p-2">
          <Menu size={23} />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="bg-gray-300 dark:bg-gray-900 px-4 py-6 border-r border-gray-300 dark:border-gray-900"
        side={SHEET_SIDE}
      >
        <SideBarHeader close={setOpen} />
        <div className="mb-8" />
        <NavBar close={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
