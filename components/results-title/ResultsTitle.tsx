import Button from '../ui/button';
import classes from './results-title.module.css';
import { formatShortDateReadable } from '../../utils';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = formatShortDateReadable(date);

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
