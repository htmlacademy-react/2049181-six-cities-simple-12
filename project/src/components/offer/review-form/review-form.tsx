import { useRef, useState } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch/use-App-Dispatch';
import { postCommentAction } from '../../../store/api-actions';
import { CommentData } from '../../../types/comment-data';
import ReviewFormRating from '../../review-form-rating/review-form-rating';
import { MAX_RATING_STARS, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../../const';

type ReviewFormProps = {
  id: string;
};

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const formRef = useRef(null);
  const dispatch = useAppDispatch();
  const defaultFormData = {
    rating: 0,
    review: ''
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLTextAreaElement & HTMLDivElement>) => {
    const {value} = evt.target;
    setFormData({
      ...formData,
      review: value
    });
  };

  const ratingChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({
      ...formData,
      rating: +value,
    });
  };

  const handleButtonDisabled = () => !(
    !isSubmitting
    && formData.rating > 0
    && (formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length <= MAX_REVIEW_LENGTH));

  return (
    <form
      ref={formRef}
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        const commentData: CommentData = {
          comment: formData.review,
          rating: Number(formData.rating),
          id: Number(id)
        };
        (async () => {
          setIsSubmitting(true);

          await dispatch(postCommentAction(commentData));

          setIsSubmitting(false);
          setFormData(defaultFormData);
        })();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Array.from(
            {length: MAX_RATING_STARS}, (_, i) => <ReviewFormRating value={MAX_RATING_STARS - i} isDisabled={isSubmitting} key={i} onChange={ratingChangeHandle} isChecked={formData.rating === MAX_RATING_STARS - i}/>
          )
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandle} disabled={isSubmitting} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={handleButtonDisabled()}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
