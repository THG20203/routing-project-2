import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            /* eventDetailLoader removed from the eventDetailPage router- added to wrapper route
            so can use nested routes feature not just to use a wrapper layout component to use a 
            shared loader */
            /* as learned before, can access loader data with use loader with special hook provided 
            by react router in any component thats on the same level or a lower level than the route 
            where the loader is added. */
            loader: eventDetailLoader,
            // constructing nested routes, with parent route url and child route urls
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          /* to add an action to the new route, we add a special action property. Just like loader,
          action wants a function. */
          /* But like loaders, want to keep it away from route definitions in the 
          app.js, and close to the code definition files where it belongs, so in this case in 
          NewEvent.js file */
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
