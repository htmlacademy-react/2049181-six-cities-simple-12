import { RatingTitle } from '../../const';

type ReviewFormProps = {
  value: number;
  isDisabled: boolean;
  isChecked: boolean;

  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewFormRating ({value, isDisabled, isChecked, onChange}: ReviewFormProps): JSX.Element {

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" disabled={isDisabled} checked={isChecked} onChange={onChange}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={RatingTitle.get(value)}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewFormRating;
