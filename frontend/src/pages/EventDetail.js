/* useRouteLoaderData -> works almost like useLoaderData, but it takes a route id as an argument */
import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  /* useRouteLoaderData taking a route id as an argument 'event-detail'. Event-detail is the id 
  assigned to the route :eventId in the app.js */
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

export async function action({ params }) {
  const eventId = params.eventId;
  // deleting an event
  const response = await fetch("https://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
