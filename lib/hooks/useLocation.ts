import { useRecoilState } from 'recoil';

import { mapState, MapStateType } from '@/lib/Recoil/atoms/mapAtom';
import { getRegion } from '@/lib/map/getRegion';

const useLocation = () => {
  const [mapDetail, setMapDetail] = useRecoilState<MapStateType>(mapState);

  const updateLatLng = (lat: number, lng: number) => {
    setMapDetail({
      latitude: lat,
      longitude: lng,
      loading: false,
      address_name: '',
      place_url: '',
      place_name: '',
    });
  };

  return { mapDetail, setMapDetail, updateLatLng };
};

export { useLocation };
