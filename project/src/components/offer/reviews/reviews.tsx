import { Review } from '../../../types/review';
import { dateToString, humanizeDate, ratingToWidth } from '../../../utils/adapt';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
reviews: Review[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map(({id, user, rating, comment, date}) => (
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
        ))}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default Reviews;
