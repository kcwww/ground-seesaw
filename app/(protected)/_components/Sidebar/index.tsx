import Hamburger from '@/app/(protected)/_components/Sidebar/Hamburger';
import NavBar from '@/app/(protected)/_components/Sidebar/NavBar';

const Sidebar = () => {
  return (
    <>
      <aside className="fixed md:flex flex-col bg-gray-700 w-[20rem] h-full px-4 py-6 transition-transform duration-300 ease-in-out z-50 transform -translate-x-full md:translate-x-0 border-r">
        <h1>Sidebar</h1>
        <NavBar />
      </aside>
      <Hamburger />
    </>
  );
};

export default Sidebar;