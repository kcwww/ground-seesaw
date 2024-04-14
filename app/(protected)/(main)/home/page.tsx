import MainBanner from '@/app/(protected)/(main)/home/_components/MainBanner';
import RecentPosts from '@/app/(protected)/(main)/home/_components/RecentPosts';
import PopularPosts from '@/app/(protected)/(main)/home/_components/PopularPosts';
import RecentEvents from '@/app/(protected)/(main)/home/_components/RecentEvents';
import Notifications from '@/app/(protected)/(main)/home/_components/Notifications';

const HomePage = async () => {
  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col justify-start items-start p-8 gap-8">
        <MainBanner />
        <Notifications />
        <RecentPosts />
        <PopularPosts />
        <RecentEvents />
      </div>
    </div>
  );
};

export default HomePage;
