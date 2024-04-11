'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

const RecoilRootProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
