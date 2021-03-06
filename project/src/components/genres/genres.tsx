import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { MouseEvent } from 'react';
import cn from 'classnames';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import { changeActiveGenre } from '../../store/action';

type GenresProps = {
  genres: string[];
};

const mapStateToProps = ({FILMS}: State) => ({
  genreState: FILMS.activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(changeActiveGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresProps;

function Genres({genres, genreState, onChangeGenre}: ConnectedComponentProps): JSX.Element {
  const handleGenreClick = (
    evt: MouseEvent<HTMLAnchorElement>,
    genre: string,
  ) => {
    evt.preventDefault();

    onChangeGenre(genre);
  };

  const genreClasses = (genre: string) =>
    cn({
      'catalog__genres-item': true,
      'catalog__genres-item--active': genre === genreState,
    });

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={genreClasses(genre)} key={genre}>
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => handleGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { Genres };

export default connector(Genres);
