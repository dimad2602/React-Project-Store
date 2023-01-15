import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Build from './pages/Build';
import DevicePage from './pages/DevicePage';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import OurConfigs from './pages/OurConfigs';
import {
  ADMIN_ROUTE,
  BUILT_ROUTE,
  DEVICE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  CONTACTS_ROUTE,
  OURCONFIGS_ROUTE,
} from './utils/consts';
import Reviews from './pages/Reviews';
import Recommendations from './pages/Recommendations';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BUILT_ROUTE,
    Component: Build,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
    //Element: Home
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: '/reviews',
    Component: Reviews,
  },
  {
    path: '/recommendations',
    Component: Recommendations,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: BUILT_ROUTE,
    Component: Build,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: OURCONFIGS_ROUTE,
    Component: OurConfigs,
  },
];
