// Outlet imported from react.
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      {/* rendering the outlet component cause want to use the events route layout
      as a wrapper around other pages where the content of those pages show be 
      rendered in this place where I have this outlet component as a marker. */}
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
