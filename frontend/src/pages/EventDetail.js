import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

/* exporting as an aysync function because I want to use the await keyword */
export async function loader({ request, params }) {
  const id = params.eventId;

  /* with fetch, send request to dummy backend api, which I can reach with https://localhost:8080/events/ */
  /* + id means plus the id of the event for which we want to fetch the details */
  /* Then get a response by awaiting - react router automatically awaits the promise and gives us access 
  to the data to which it resolves. */
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    /* Only if thats not the case, if we have a successful response, I want to return the response */
    return response;
  }
}
