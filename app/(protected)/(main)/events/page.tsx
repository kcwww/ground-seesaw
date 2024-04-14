import KakaoMap from '@/components/map/KakaoMap';

import SearchLocation from '@/app/(protected)/(main)/events/_components/SearchLocation';

const EventsPage = () => {
  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center gap-8">
        <SearchLocation />
        <KakaoMap />
      </div>
    </div>
  );
};

export default EventsPage;
