import { atom } from 'recoil';

export type dateStateType = {
  year: number | null;
  month: number | null;
  day: number | null;
  hour: number | null;
  minute: number | null;
};

const dateState = atom<dateStateType>({
  key: 'dateState',
  default: {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
  },
});

export { dateState };
