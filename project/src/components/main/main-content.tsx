import FilmCard from '../film-card/film-card';
import { FilmItem } from '../app/app';

type FilmsAmountProps = {
  filmsData: FilmItem[],
}

function MainPageContent({filmsData}: FilmsAmountProps): JSX.Element {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="/" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="/" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__films-list">
          {
            filmsData.map((film) => <FilmCard key={film.name} filmsData={ film }/>)
          }
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light" href="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPageContent;