import { useRecoilState } from 'recoil';

import { mapState, MapStateType } from '@/lib/Recoil/atoms/mapAtom';
import { getRegion } from '@/lib/map/getRegion';

const useLocation = () => {
  const [mapDetail, setMapDetail] = useRecoilState<MapStateType>(mapState);

  const updateMapDetail = async (lat: number, lng: number) => {
    const region = await getRegion(lng, lat);

    setMapDetail({
      latitude: lat,
      longitude: lng,
      region: region,
    });
  };

  return { updateMapDetail, mapDetail };
};

export { useLocation };
