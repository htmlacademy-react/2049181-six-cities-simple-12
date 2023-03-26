import { City } from '../../const';

type CitiesTabsProps = {
  cities: City[];}

export default function CitiesTabs({cities}: CitiesTabsProps): JSX.Element {

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a className="locations__item-link tabs__item" href="/">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

