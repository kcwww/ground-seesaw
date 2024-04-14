'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation } from '@/lib/hooks/useLocation';
import { useModal } from '@/lib/hooks/useModal';

const SearchLocation = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const { mapDetail } = useLocation();
  const { onOpen } = useModal();

  const handleSearch = async (type: string) => {
    if (type === 'search' && searchValue) {
      onOpen('Location', { data: { searchValue } });
    } else if (type === 'current') {
      try {
        onOpen('Location', { data: { searchValue: mapDetail.address_name } });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-xl bold">일정을 위한 장소 정하기</h1>
      <div className="flex gap-2">
        <div className="w-2/3 flex flex-col gap-4">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="장소를 검색해주세요."
          />

          <div className="flex justify-center items-center">
            {mapDetail.address_name} <br />
            {mapDetail.place_name}
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <Button
            disabled={!searchValue || mapDetail.loading}
            onClick={async () => {
              handleSearch('search');
            }}
          >
            이 위치로 검색
          </Button>
          <Button
            disabled={mapDetail.loading}
            onClick={async () => {
              handleSearch('current');
            }}
          >
            핀 위치로 찾기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
