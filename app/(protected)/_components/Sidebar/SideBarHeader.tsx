import Image from 'next/image';
import Link from 'next/link';

import SideBarIcon from '@/public/imgs/icons/logo.png';
import { ROUTES } from '@/constants/routes';

const SideBarHeader = () => {
  return (
    <header>
      <Link href={ROUTES.HOME}>
        <div className="flex gap-2 justify-start items-center">
          <Image src={SideBarIcon} alt="logo" width={50} height={50} />
          <div className="header__title">GROUND SEESAW</div>
        </div>
      </Link>
    </header>
  );
};

export default SideBarHeader;
