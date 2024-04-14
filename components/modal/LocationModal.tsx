'use client';

import { useEffect, useState } from 'react';

import { useLocation } from '@/lib/hooks/useLocation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useModal } from '@/lib/hooks/useModal';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { searchRegion } from '@/lib/map/getRegion';

type LocationResultType = {
  address_name: string;
  x: string;
  y: string;
  place_url: string;
  place_name: string;
};

const LocationModal = () => {
  const { onClose, isOpen, type, props } = useModal();
  const [result, setResult] = useState<LocationResultType[]>([]);
  const [radioValue, setRadioValue] = useState<LocationResultType | null>(null);
  const { setMapDetail, mapDetail } = useLocation();

  const getLocation = async () => {
    try {
      const region = await searchRegion(props.data.searchValue);
      region.documents.forEach((doc: LocationResultType) => {
        setResult((prev) => [
          ...prev,
          {
            address_name: doc.address_name,
            x: doc.x,
            y: doc.y,
            place_url: doc.place_url,
            place_name: doc.place_name,
          },
        ]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (type === 'Location') {
      getLocation();
    }
  }, [type]);

  if (type !== 'Location') return null;

  return (
    <AlertDialog open={isOpen && type === 'Location'}>
      <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>장소를 선택하여 주세요 ~</AlertDialogTitle>
          <div className="flex flex-col gap-2">
            {result.length > 0 ? (
              <RadioGroup
                onValueChange={(value) => {
                  setRadioValue(JSON.parse(value));
                }}
              >
                {result.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={JSON.stringify(item)}
                        id={item.place_name}
                      />
                      <div>
                        <label htmlFor={item.place_name}>
                          {item.address_name} <br />
                          {item.place_name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </RadioGroup>
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              onClose();
              setResult([]);
            }}
          >
            닫기
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={!radioValue}
            onClick={() => {
              onClose();
              setResult([]);
              if (!radioValue) return;
              setMapDetail({
                ...mapDetail,
                latitude: radioValue.y ? parseFloat(radioValue.y) : 0,
                longitude: radioValue.x ? parseFloat(radioValue.x) : 0,
                address_name: radioValue.address_name
                  ? radioValue.address_name
                  : '',
                place_url: radioValue.place_url ? radioValue.place_url : '',
                place_name: radioValue.place_name ? radioValue.place_name : '',
              });
            }}
          >
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LocationModal;
