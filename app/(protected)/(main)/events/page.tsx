import KakaoMap from '@/components/map/KakaoMap';

const EventsPage = () => {
  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center">
        <KakaoMap />
      </div>
    </div>
  );
};

export default EventsPage;
