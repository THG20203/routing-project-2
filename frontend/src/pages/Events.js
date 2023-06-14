/* useLoaderData is a special hook which we can execute to get access to the closest loader data. */
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  /* How do we now get access to that data that is returned by our loader? First
  above importing useLoaderData */
  const events = useLoaderData();

  return (
    <>
      {/* the events object / the array of events which I can pass as a value to the events prop
      on Events list. */}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// export loader -> although name is up to me
export async function loader() {
  // sends https request to dummy backend API
  const response = await fetch("http://localhost:8000/events");
  // error stored if invalid response
  if (!response.ok) {
  } else {
    const resData = await response.json();
    /* get data into events page -> make it available as well as any other components 
    where you need it */
    return resData.events;
  }
}
