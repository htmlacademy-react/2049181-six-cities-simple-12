import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import { Reviews } from '../../../types/review';
import { useAppSelector } from '../../../hooks/useAppSelector/use-app-selector';

function ReviewsList(): JSX.Element {
  const reviews: Reviews = useAppSelector((store) => store.reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default ReviewsList;
