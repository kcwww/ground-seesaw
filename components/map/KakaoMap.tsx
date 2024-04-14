'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Skeleton } from '@/components/ui/skeleton';
import { getLocation } from '@/lib/map/getLocation';
import { useLocation } from '@/lib/hooks/useLocation';

const KakaoMap = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['location'],
    queryFn: getLocation,
  });

  const { updateMapDetail, mapDetail } = useLocation();

  if (isLoading)
    return (
      <div className="w-full rounded">
        <Skeleton className="w-full h-[28.75rem]" />
      </div>
    );

  const displayData = error ? mapDetail : data;

  if (!displayData) return <div>Failed to load data</div>;

  return (
    <>
      <Map
        center={{ lat: displayData.latitude, lng: displayData.longitude }}
        style={{ width: '100%', height: '28.75rem' }}
        level={3}
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          updateMapDetail(latlng.getLat(), latlng.getLng());
        }}
      >
        {displayData && (
          <MapMarker
            position={{
              lat: displayData.latitude,
              lng: displayData.longitude,
            }}
          ></MapMarker>
        )}
      </Map>
    </>
  );
};

export default KakaoMap;
