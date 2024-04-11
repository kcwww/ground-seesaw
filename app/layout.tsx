import type { Metadata } from 'next';

import { anekGurmukhi } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';
import RecoilRootProvider from '@/Recoil/providers/RecoilProvider';
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={anekGurmukhi.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
      <Toaster richColors />
    </html>
  );
};

export default RootLayout;
