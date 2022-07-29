import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { Loading } from 'components/Loading/Loading';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};
