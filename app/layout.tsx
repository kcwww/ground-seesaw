import Script from 'next/script';
import type { Metadata } from 'next';

import { KAKAO_API } from '@/constants/routes';
import { anekGurmukhi } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';
import RecoilRootProvider from '@/Recoil/providers/RecoilProvider';
import QueryProvider from '@/Query/providers/Queryprovider';
import './globals.css';

export const metadata: Metadata = {
  title: 'GROUND SEESAW',
  description: '23-24 season collection',
  metadataBase: null, // temp
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://ground-seesaw.vercel.app/',
    images: '',
  },
};

declare global {
  interface Window {
    kakao: any;
  }
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={anekGurmukhi.className}>
        <Script src={KAKAO_API.MAP} strategy="beforeInteractive" />
        <RecoilRootProvider>
          <QueryProvider>{children}</QueryProvider>
        </RecoilRootProvider>
      </body>
      <Toaster richColors />
    </html>
  );
};

export default RootLayout;
