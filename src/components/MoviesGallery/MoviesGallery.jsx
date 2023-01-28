import { MoviesGalleryItem } from "./MoviesGalleryItem/MoviesGalleryItem";

export const MoviesGallery = ({ movies, deleteMovie, openModal }) => {
  return (
    <ul>
      {movies.map(({ title, vote_count, id, backdrop_path }) => {
        return (
          <MoviesGalleryItem
            key={id}
            title={title}
            votes={vote_count}
            id={id}
            backdrop={backdrop_path}
            deleteMovie={deleteMovie}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};
