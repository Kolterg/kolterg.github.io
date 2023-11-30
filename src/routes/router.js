import { createBrowserRouter } from 'react-router-dom';

import App from '../app/App';
import ErrorPage from '../app/pages/error-page/error-page';
import LandingPage from '../app/pages/landing/landing';
import AboutPage from '../app/pages/about/about';
import RoomsPage from '../app/pages/rooms/rooms';
import ReservationsPage from '../app/pages/reservations/reservations';
import ContactsPage from '../app/pages/contacts/contacts';
import ActivityPage from '../app/pages/activity/activity';

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
            element: <LandingPage />
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
            element: <ReservationsPage />
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
  }
])

export default router;