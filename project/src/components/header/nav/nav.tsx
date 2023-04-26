import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks/use-app-selector/use-app-selector';
import { dropToken } from '../../../services/token';

function Nav(): JSX.Element {
  const isAuthorized = (useAppSelector((state)=> state.authorizationStatus)) === AuthorizationStatus.Auth;
  const userEmail = useAppSelector((state) => state.userEmail);
  const userAvatar = useAppSelector((state) => state.userAvatarUrl);
  const signOutClickHandler = () => dropToken();

  const handleNavItem = () => isAuthorized
    ? (
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userAvatar})`}}></div>
            <span className="header__user-name user__name">{userEmail}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            <span className="header__signout" onClick={signOutClickHandler}>Sign out</span>
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
