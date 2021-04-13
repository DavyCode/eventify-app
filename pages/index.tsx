import Head from 'next/head'
import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/EventList';
import NewsletterRegistration from '../components/input/NewsletterRegistration'
import { Event } from '../types'

type Props = {
  events: Array<Event>;
}

function HomePage({events}: Props) {  
  return (
    <div>
      <Head>
        <title>Eventify App</title>
        <meta
          name='description'
          content='Amazing events awaits you here'
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={events} />
    </div>
  );
}

HomePage.getInitialProps = async (ctx) => {
  const featuredEvents: Event[] = getFeaturedEvents();
  // call external api/service here and return res.json()
  return { 
    events: featuredEvents
  }
}

export default HomePage;