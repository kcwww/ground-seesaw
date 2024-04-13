'use client';

import { RecoilRoot } from 'recoil';
import React, { useEffect } from 'react';

const RecoilRootProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
