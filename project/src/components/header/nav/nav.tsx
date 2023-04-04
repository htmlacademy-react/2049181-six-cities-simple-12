import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks/useAppSelector/use-app-selector';

function Nav(): JSX.Element {
  const isAuthorized = (useAppSelector((state)=> state.authorizationStatus)) === AuthorizationStatus.Auth;

  const handleNavItem = () => isAuthorized
    ? (
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </div>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </>
    )
    : (
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {handleNavItem()}
      </ul>
    </nav>
  );
}

export default Nav;
