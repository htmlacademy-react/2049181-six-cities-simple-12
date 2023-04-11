import { Review as ReviewType } from '../../../types/review';
import { ratingToWidth, dateToString, humanizeDate } from '../../../utils/adapt';

type ReviewProps = {
  review: ReviewType;
}

function Review({review: {id, user, rating, comment, date}}: ReviewProps): JSX.Element {

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingToWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateToString(new Date(date))}>{humanizeDate(new Date(date))}</time>
      </div>
    </li>
  );
}

export default Review;
