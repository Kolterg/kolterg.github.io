import { createBrowserRouter } from 'react-router-dom';

import App from 'app/App';
import ErrorPage from 'app/pages/error-page/error-page';
import LandingPage from 'app/pages/landing/landing';
import AboutPage from 'app/pages/about/about';
import RoomsPage from 'app/pages/rooms/rooms';
import ReservationsPage, { loader as reservationsLoader } from 'app/pages/reservations/reservations';
import ContactsPage from 'app/pages/contacts/contacts';
import ActivityPage from 'app/pages/activity/activity';
import Room, {
  action as roomAction,
  loader as roomLoader
} from 'app/pages/room/room';
import { action as lendingAction } from 'app/pages/landing/landing';
import Admin from 'admin/Admin';
import Login, { action as loginAction } from 'admin/pages/login/login';
import RoomsListPage, {
  action as roomsListAction,
  loader as roomsListLoader
} from 'admin/pages/roomsList/roomsList';
import RoomAdmin, { action, loader as roomAdminLoader } from 'admin/pages/room-admin/room-admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <LandingPage />,
            action: lendingAction
          },
          {
            path: 'about',
            element: <AboutPage />
          },
          {
            path: 'rooms',
            element: <RoomsPage />
          },
          {
            path: 'reservations',
            element: <ReservationsPage />,
            loader: reservationsLoader
          },
          {
            path: 'room/:roomId',
            element: <Room />,
            loader: roomLoader,
            action: roomAction,
          },
          {
            path: 'contacts',
            element: <ContactsPage />
          },
          {
            path: 'activity',
            element: <ActivityPage />
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction
      },
      {
        path: 'rooms',
        element: <RoomsListPage />,
        loader: roomsListLoader,
        action: roomsListAction,
      },
      {
        path: 'room-admin/:roomId',
        element: <RoomAdmin />,
        loader: roomAdminLoader,
        action: action
      }
    ]
  }
])

export default router;