import { Fragment } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';
import Comments from '../../components/input/Comments';
import { Event } from '../../types'

function EventDetailPage() {
  const router = useRouter();

  const eventId: string | string[] = router.query.eventId;
  const event: Event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert><p>No Events found for : {eventId}</p></ErrorAlert>
    )
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name='description'
          content={event.description}
        />
      </Head>
      <EventSummary title={event.title}/>
      <EventLogistics event={event}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id}/>
    </Fragment>
  );
}

export default EventDetailPage;