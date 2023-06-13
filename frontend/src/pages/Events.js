import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      // sends https request to dummy backend API
      const response = await fetch("http://localhost:8080/events");

      // error stored if invalid response
      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        // if no error extract the data from the response -> store that with the help of state
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      {/* all the states used down here to show a Loading text, an error message or the fetch events 
    which are now fetched from that dummy backend. Those events are rendered here with the help of that 
    list component in the components folder. */}
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;
