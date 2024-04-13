'use client';

import { useEffect, useState } from 'react';

import SubmitModal from '@/components/modal/SubmitModal';

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
    </>
  );
};

export default ModalProvider;
