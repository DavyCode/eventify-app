import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './LogisticsItem';
import classes from './event-logistics.module.css';
import { formatDateReadable,  formattedAddress } from '../../utils';
import { Event } from '../../types'

type Props = {
  event: Event
}
function EventLogistics({ event }: Props) {
  const { date, location, image, title } = event;

  const imageAlt = title;

  const humanReadableDate = formatDateReadable(date); 
  const addressText = formattedAddress(location);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
