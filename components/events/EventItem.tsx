import { Event } from '../../types';
import { formatDateReadable, formattedAddress } from '../../utils';
import Button from '../ui/button'

import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem({ events }) {
  const { id, title, description, location, date, image, isFeatured } = events;
  const dateReadable = formatDateReadable(date);
  const addressFormatted = formattedAddress(location);
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt="title"/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          
          <div className={classes.date}>
            <DateIcon /><time>{dateReadable}</time>
          </div>

          <div className={classes.address}>
            <AddressIcon /> <address>{addressFormatted}</address>
          </div>

        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>
              Explore Event
            </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem;