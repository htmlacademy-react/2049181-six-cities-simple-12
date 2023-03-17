import { ratingToWidth } from '../../../utils/adapt';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps): JSX.Element {

  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${ratingToWidth(rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default Rating;
