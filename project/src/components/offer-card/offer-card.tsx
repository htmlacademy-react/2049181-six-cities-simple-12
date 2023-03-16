import { ClassType } from '../../const';
import { Offer } from '../../types/offer';
import { capitalize, ratingToWidth } from '../../utils/adapt';
import Mark from '../offer/mark/mark';

type OfferCardProps = {
  offer: Offer;
  setActiveOfferId: (id: number) => void;
}

function OfferCard({offer: {isPremium, previewImage, type, price, rating, title, id }, setActiveOfferId}: OfferCardProps): JSX.Element {

  return (
    <article className="cities__card place-card" onMouseEnter={() => setActiveOfferId(id)} onMouseLeave={() => setActiveOfferId(-1)}>
      {isPremium && <Mark classType={ClassType.OfferCard}/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={capitalize(type)}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
