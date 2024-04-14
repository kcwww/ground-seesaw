'use client';

import { useEffect, useState } from 'react';

import SubmitModal from '@/components/modal/SubmitModal';
import DeleteModal from '@/components/modal/DeleteModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SubmitModal />
      <DeleteModal />
    </>
  );
};

export default ModalProvider;
