import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import { useAppSelector } from '../../../hooks/useAppSelector/use-app-selector';
import { AuthorizationStatus } from '../../../const';

type ReviewsListProps = {
  id: string;
}

function ReviewsList({id}:ReviewsListProps): JSX.Element {
  const authStatus = useAppSelector((store) => store.authorizationStatus);
  const reviews = useAppSelector((store) => store.reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </ul>
      {authStatus === AuthorizationStatus.Auth && <ReviewForm id={id}/>}
    </section>
  );
}

export default ReviewsList;
