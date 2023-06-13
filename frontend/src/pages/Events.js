import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      {/* on events page, want to display this list of events. For that, add unordered list, 
      then map through dummy events. Every event should turn into a list item where we set the key to 
      event.id. Inside the list item we then have a Link */}
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {/* Link should actually lead to /events/the id of the event for which we're creating this 
            list item. We can construct a relative link -> just navigating to event.id. This will be 
            appended after the currently active event routes path. */}
            {/* Then we output event.title */}
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
