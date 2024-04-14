import { useRecoilState } from 'recoil';

import { mapState, MapStateType } from '@/lib/Recoil/atoms/mapAtom';
import { getRegion } from '@/lib/map/getRegion';

const useLocation = () => {
  const [mapDetail, setMapDetail] = useRecoilState<MapStateType>(mapState);

  const updateLatLng = (lat: number, lng: number) => {
    setMapDetail({
      ...mapDetail,
      latitude: lat,
      longitude: lng,
      loading: false,
    });
  };

  return { mapDetail, setMapDetail, updateLatLng };
};

export { useLocation };
