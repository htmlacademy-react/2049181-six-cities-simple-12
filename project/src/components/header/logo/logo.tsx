import { Link } from 'react-router-dom';
import { DEFAULT_CITY } from '../../../const';
import { useAppDispatch } from '../../../hooks/useAppDispatch/use-App-Dispatch';
import { changeCity } from '../../../store/action';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();
  const logoClickHandler = () => {
    dispatch(changeCity(DEFAULT_CITY));
  };

  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" onClick={logoClickHandler}/>
    </Link>
  );
}

export default Logo;
