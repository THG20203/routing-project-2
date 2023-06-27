import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  /* sending a request with the fetch function - to localhost:8080 - to my dummy backend API which 
  listens on port 8080/events */
  /* also want to send a post request, and add some data to the request. Data that I want to send 
  is data submitted with the form. On form all inputs should have name attribute */
  const response = fetch("https://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    // if 422 status code is present, want to return a response
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
}
