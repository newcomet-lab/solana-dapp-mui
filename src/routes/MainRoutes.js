import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const AdminPanel = Loadable(lazy(() => import('views/admin-panel')));
const NewVesting = Loadable(lazy(() => import('views/new-vesting')));
const VestingDetail = Loadable(lazy(() => import('views/vesting-detail')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <AdminPanel />
        },
        {
            path: '/admin-panel',
            element: <AdminPanel />
        },
        {
            path: '/new-vesting',
            element: <NewVesting />
        },
        {
            path: '/vesting-detail',
            element: <VestingDetail />
        }
    ]
};

export default MainRoutes;
