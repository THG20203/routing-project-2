import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);

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
