import {FilmItem} from '../app/app';

type CardMockDataProps = {
  filmsData: FilmItem,
}


function FilmCard({filmsData}:CardMockDataProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmsData.previewImage} alt={filmsData.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmsData.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;