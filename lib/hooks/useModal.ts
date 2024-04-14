import { useRecoilState } from 'recoil';

import { modalState } from '@/lib/Recoil/atoms/modalAtom';

export type modalType = 'Submit' | 'Delete' | 'Location';

export interface ModalProps {
  data?: any;
}

interface ModalStore {
  type: modalType | null;
  props: ModalProps;
  isOpen: boolean;
  onOpen: (type: modalType, props?: ModalProps) => void;
  onClose: () => void;
}

const useModal = (): ModalStore => {
  const [state, setState] = useRecoilState(modalState);

  const onOpen = (type: modalType, props: ModalProps = {}) => {
    setState({ isOpen: true, type, props });
  };

  const onClose = () => {
    setState({ isOpen: false, type: null, props: {} });
  };

  return { ...state, onOpen, onClose };
};

export { useModal };
