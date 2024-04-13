'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { getLocation } from '@/lib/map/getLocation';

const KakaoMap = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['location'],
    queryFn: getLocation,
  });

  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <Map
        center={{ lat: data.latitude, lng: data.longitude }}
        style={{ width: '100%', height: '460px' }}
        level={3}
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
      >
        {position && (
          <MapMarker
            position={{ lat: position.lat, lng: position.lng }}
          ></MapMarker>
        )}
      </Map>
    </>
  );
};

export default KakaoMap;
