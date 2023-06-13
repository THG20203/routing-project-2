/* useParams hook -> gives us access to the currently active router parameters, so
to the values that are encoded in the url for our dynamic path segments. */
import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      {/* its .eventId in my case cause I used eventId in my app.js as an identifier
      after the colon. */}
      <p>EventId: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
