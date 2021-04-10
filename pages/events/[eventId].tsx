import { Fragment } from 'react'
import { useRouter } from 'next/router';

import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <h1>No Events found for : {eventId}</h1>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics event={event}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;