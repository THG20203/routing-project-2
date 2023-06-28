/* useRouteLoaderData -> works almost like useLoaderData, but it takes a route id as an argument */
import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  /* useRouteLoaderData taking a route id as an argument 'event-detail'. Event-detail is the id 
  assigned to the route :eventId in the app.js */
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
      <EventsList events={} />
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

const response = await fetch("http://localhost:8080/events");

if (!response.ok) {
  // return { isError: true, message: 'Could not fetch events.' };
  // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
  //   status: 500,
  // });
  throw json(
    { message: "Could not fetch events." },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.events;
}


export async function loader({ params, request }) {
  const id = params.eventId;

  return defer()
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
