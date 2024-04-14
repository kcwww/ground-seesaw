'use client';

import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Skeleton } from '@/components/ui/skeleton';
import { getLocation } from '@/lib/map/getLocation';
import { useLocation } from '@/lib/hooks/useLocation';

const KakaoMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { updateMapDetail, mapDetail } = useLocation();

  useEffect(() => {
    getLocation()
      .then((data) => {
        updateMapDetail(data.latitude, data.longitude);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="w-full rounded">
        <Skeleton className="w-full h-[28.75rem]" />
      </div>
    );

  return (
    <>
      <Map
        center={{ lat: mapDetail.latitude, lng: mapDetail.longitude }}
        style={{ width: '100%', height: '28.75rem' }}
        level={3}
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          updateMapDetail(latlng.getLat(), latlng.getLng());
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
