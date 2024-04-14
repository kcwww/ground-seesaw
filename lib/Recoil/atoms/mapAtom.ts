import { atom } from 'recoil';

const kakaoCorpLocation = {
  latitude: 33.450701,
  longitude: 126.570667,
  address_name: '제주특별자치도 제주시 첨단로 242',
  place_url: 'https://kko.to/dI2OxppneT',
  place_name: '카카오',
  loading: true,
};

export type MapStateType = {
  latitude: number;
  longitude: number;
  place_name: string;
  loading: boolean;
  address_name: string;
  place_url: string;
};

const mapState = atom<MapStateType>({
  key: 'mapState',
  default: {
    ...kakaoCorpLocation,
  },
});

export { mapState };
