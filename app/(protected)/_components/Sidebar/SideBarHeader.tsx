import Image from 'next/image';

import SideBarIcon from '@/public/imgs/icons/logo.png';

const SideBarHeader = () => {
  return (
    <header>
      <div className="flex gap-2 justify-start items-center">
        <Image src={SideBarIcon} alt="logo" width={50} height={50} />
        <div className="header__title">GROUND SEESAW</div>
      </div>
    </header>
  );
};

export default SideBarHeader;
