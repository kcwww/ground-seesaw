'use client';

import { useEffect, useState } from 'react';

import SubmitModal from '@/components/modal/SubmitModal';
import DeleteModal from '@/components/modal/DeleteModal';
import LocationModal from '@/components/modal/LocationModal';

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
      <LocationModal />
    </>
  );
};

export default ModalProvider;
