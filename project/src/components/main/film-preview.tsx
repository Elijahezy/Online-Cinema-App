import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import { Film } from '../../types/types';
import { useDispatch } from 'react-redux';
import { favoriteFilmPostAction } from '../../store/api-actions';
import {Suspense, useEffect, useState} from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import CircleSpinner from "../spinner/spinner";

function FilmPreview(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const promoFilm = useSelector<State, Film>((state) => state.DATA.promo);
  const { name, genre, released, posterImage, id } = promoFilm;

  const favoriteFilms = useSelector<State, Film[]>((state) => state.DATA.favoriteFilms);

  const [ isFilmFavorite, setFavoriteFilm ] = useState(!!favoriteFilms.find((film) => film.id === promoFilm?.id));
  const [isLoading, setLoading] = useState(true)
  const submitFavoriteFilm = (filmId: number, setFilm?: Dispatch<SetStateAction<boolean>>) => {
    dispatch(favoriteFilmPostAction(filmId, setFilm));
  };

  useEffect(() => {
    if (promoFilm.id !== 0) return setLoading(false)
  }, [promoFilm]);

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          {
            isLoading ?
              <CircleSpinner />
              :
          <img src={posterImage} alt={name} width="218" height="327" />
          }
          </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button"  onClick={() => submitFavoriteFilm(id, setFavoriteFilm)}>
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref={isFilmFavorite ? '#in-list' : '#add'}></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPreview;
