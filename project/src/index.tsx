import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createAPI} from './services/api';
import { Provider } from 'react-redux';
import {requireAuthorization} from './store/action';
import {fetchFilmsAction, checkAuthAction, fetchPromoAction, fetchFavoriteFilmsAction} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';
import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());
store.dispatch(fetchFavoriteFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
