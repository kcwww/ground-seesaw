'use client';

import Image from 'next/image';
import Link from 'next/link';

import SideBarIcon from '@/public/imgs/icons/logo.png';
import { ROUTES } from '@/constants/routes';

interface SideBarHeaderProps {
  close?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarHeader = ({ close }: SideBarHeaderProps) => {
  const closeHandler = () => {
    if (close) {
      close(false);
    }
  };

  return (
    <header onClick={closeHandler}>
      <Link href={ROUTES.HOME}>
        <div className="flex gap-2 justify-start items-center">
          <Image src={SideBarIcon} alt="logo" width={50} height={50} />
          <div className="dark:text-gray-200">GROUND SEESAW</div>
        </div>
      </Link>
    </header>
  );
};

export default SideBarHeader;
