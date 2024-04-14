'use client';

import { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Skeleton } from '@/components/ui/skeleton';
import { getLocation } from '@/lib/map/getLocation';
import { useLocation } from '@/lib/hooks/useLocation';
import { getRegion } from '@/lib/map/getRegion';

const KakaoMap = () => {
  const { updateLatLng, mapDetail, setMapDetail } = useLocation();

  useEffect(() => {
    getLocation()
      .then((data) => {
        updateLatLng(data.latitude, data.longitude);
        setMapDetail({ ...mapDetail, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setMapDetail({ ...mapDetail, loading: false });
      });
  }, []);

  if (mapDetail.loading)
    return (
      <div className="w-full rounded">
        <Skeleton className="w-full h-[28.75rem]" />
      </div>
    );

  return (
    <>
      <Map
        isPanto={true}
        disableDoubleClick={true}
        center={{ lat: mapDetail.latitude, lng: mapDetail.longitude }}
        style={{ width: '100%', height: '28.75rem' }}
        level={3}
        onClick={async (_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          const data = await getRegion(latlng.getLng(), latlng.getLat());
          setMapDetail({
            ...mapDetail,
            loading: false,
            address_name: data.documents[0].address.address_name,
            place_url: '',
            place_name: '',
            latitude: latlng.getLat(),
            longitude: latlng.getLng(),
          });
        }}
      >
        <MapMarker
          position={{
            lat: mapDetail.latitude,
            lng: mapDetail.longitude,
          }}
        ></MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;
