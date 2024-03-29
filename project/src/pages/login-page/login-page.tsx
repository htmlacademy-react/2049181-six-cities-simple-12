import Logo from '../../components/header/logo/logo';
import { Helmet } from 'react-helmet-async';
import { ValidationError, object, string } from 'yup';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const isUserAuthorized = (useAppSelector((state) => state.authorizationStatus)) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isUserAuthorized) {
      navigate(AppRoute.Root);
    }
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const schema = object({
    email: string()
      .required('Email is required')
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid Email'),
    password: string()
      .required('Password is required')
      .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{2,}$/, 'Password must contain a letter and a number')
  });

  return (
    <div className="page page--gray page--login">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Helmet>
        <title>Six Cities: login page</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                schema.validate(formData, {abortEarly: false})
                  .then((responseData) => {
                    dispatch(loginAction(responseData));
                    navigate(AppRoute.Root);
                  })
                  .catch ((err: ValidationError) => {
                    toast.warn(err.errors[0]);
                  });
              }}
              noValidate
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={fieldChangeHandle} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={fieldChangeHandle} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
