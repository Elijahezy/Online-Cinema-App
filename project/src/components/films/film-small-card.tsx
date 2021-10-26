import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../mocks/types';

type CardMockDataProps = {
  filmsData: Film,
}


function FilmSmallCard({filmsData}:CardMockDataProps): JSX.Element {

  const {name, id, previewImage} = filmsData;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Films.replace(':id', `${id}`)} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmSmallCard;
