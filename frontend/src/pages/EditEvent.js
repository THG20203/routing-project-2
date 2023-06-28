import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  {
    /* Event form should be pre populated with the data for the event, which we're trying to edit. */
  }
  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
