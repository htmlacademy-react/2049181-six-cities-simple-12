import { City } from '../../const';


type NoOffersProps = {
  city: City;
}

function NoOffers({city}: NoOffersProps): JSX.Element {

  return(
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
    </div>
  );
}

export default NoOffers;
