import { generatePath, NavLink } from 'react-router-dom';
import { AppRoute, City } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/use-App-Dispatch';
import { changeCity } from '../../store/action';

type CitiesTabsProps = {
  cities: City[];}

export default function CitiesTabs({cities}: CitiesTabsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleNavLinkClick = (city: City) => {
    dispatch(changeCity(city));
  };


  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <NavLink
                className={({isActive}) => isActive ? 'tabs__item--active locations__item-link tabs__item' : 'locations__item-link tabs__item'}
                to={generatePath(AppRoute.City, {selectedCity: city})}
                onClick={(evt) => handleNavLinkClick(city)}
              >
                <span>{city}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

