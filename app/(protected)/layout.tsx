import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('@/components/ui/DarkModeButton'), {
  ssr: false,
});
const Sidebar = dynamic(() => import('@/app/(protected)/_components/Sidebar'), {
  ssr: false,
});

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
