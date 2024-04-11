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
    </main>
  );
};

export default MainLayout;
