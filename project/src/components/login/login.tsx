/* eslint-disable no-console */
import {useRef, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import Logo from '../logo/logo';

function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch<ThunkAppDispatch>();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('asdasd');
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo/>}

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email" placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        {<Logo className={'logo__link--light'}/>}

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
