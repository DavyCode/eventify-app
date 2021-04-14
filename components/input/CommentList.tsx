import classes from './comment-list.module.css';
import { Comment } from '../../types';

type Props = {
  items: Array<Comment>;
}
function CommentList({ items }: Props) {

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
