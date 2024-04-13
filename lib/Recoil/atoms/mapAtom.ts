import { atom } from 'recoil';

const kakaoCorpLocation = {
  latitude: 33.450701,
  longitude: 126.570667,
  region: '카카오',
};

export type MapStateType = {
  latitude: number;
  longitude: number;
  region: string;
};

const mapState = atom<MapStateType>({
  key: 'mapState',
  default: {
    ...kakaoCorpLocation,
  },
});

export { mapState };
