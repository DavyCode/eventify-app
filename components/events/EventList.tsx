import React from 'react';
import EventItem from './EventItem';
import { Event } from '../../types'

import classes from './event-list.module.css';

type Props = {
  items: Array<Event>;
}

function EventList({ items }: Props) {
  return (
    <ul className={classes.list}>
      {
        items.map(event => <EventItem events={event} key={event.id}/>)
      }
    </ul>
  )
}

export default EventList;
