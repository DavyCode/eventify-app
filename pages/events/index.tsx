import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Event } from '../../types'

import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

function AllEvents() {
  const events: Event[] = getAllEvents();
  const router = useRouter();

  function getEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={getEventsHandler}/>
      <EventList items={events}/>
    </Fragment>
  );
}

export default AllEvents

