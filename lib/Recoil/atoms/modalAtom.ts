import { atom } from 'recoil';

import { modalType, ModalProps } from '@/lib/hooks/useModal';

export const modalState = atom({
  key: 'modalState',
  default: {
    isOpen: false,
    type: null as modalType | null,
    props: {} as ModalProps,
  },
});
