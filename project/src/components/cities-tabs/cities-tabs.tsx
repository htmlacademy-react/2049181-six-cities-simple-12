import { Link } from 'react-router-dom';
import { AppRoute, City } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/use-App-Dispatch';
import { useAppSelector } from '../../hooks/useAppSelector/use-app-selector';
import { changeCity } from '../../store/action';

export default function CitiesTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = Object.keys(City) as Array<City>;
  const selectedCity = useAppSelector((store) => store.city);

  const handleNavLinkClick = (city: City) => {
    dispatch(changeCity(city));
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={(selectedCity === city) ? 'tabs__item--active locations__item-link tabs__item' : 'locations__item-link tabs__item'}
                to={AppRoute.Root}
                onClick={() => handleNavLinkClick(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

