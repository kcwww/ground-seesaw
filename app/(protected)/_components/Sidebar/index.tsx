import SIDEBAR from '@/constants/sidebar';

import SideBarHeader from '@/app/(protected)/_components/Sidebar/SideBarHeader';
import Hamburger from '@/app/(protected)/_components/Sidebar/Hamburger';
import NavBar from '@/app/(protected)/_components/Sidebar/NavBar';

const Sidebar = () => {
  return (
    <>
      <aside
        className={
          'fixed md:flex flex-col gap-10 bg-gray-300 dark:bg-gray-900 h-full px-4 py-6 transition-transform duration-300 ease-in-out z-50 transform -translate-x-full md:translate-x-0 border-r ' +
          'w-[' +
          SIDEBAR.SIZE +
          ']'
        }
      >
        <SideBarHeader />
        <NavBar />
      </aside>
      <Hamburger />
    </>
  );
};

export default Sidebar;
