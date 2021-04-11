import Head from 'next/head'
import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/EventList';
import NewsletterRegistration from '../components/input/NewsletterRegistration'
import { Event } from '../types'

function HomePage() {
  const featuredEvents: Event[] = getFeaturedEvents();
  
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
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;