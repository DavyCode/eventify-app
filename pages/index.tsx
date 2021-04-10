import { getAllEvents } from '../data/dummy-data';
import EventList from '../components/events/EventList';

function AllEvents() {
  const events = getAllEvents();
  
  return (
    <div>
      <EventList items={events}/>
    </div>
  );
}

export default AllEvents
