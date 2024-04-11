import DarkModeButton from '@/components/ui/DarkModeButton';

import Sidebar from '@/app/(protected)/_components/Sidebar';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Sidebar />
      {children}
      <div className="fixed bottom-4 right-4">
        <DarkModeButton />
      </div>
    </main>
  );
};

export default MainLayout;
