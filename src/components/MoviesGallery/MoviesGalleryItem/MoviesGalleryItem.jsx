export const MoviesGalleryItem = ({ title, votes, id, backdrop, deleteMovie, openModal }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>Votes: {votes}</p>
      <button type="button" onClick={() => deleteMovie(id)}>Delete</button>
      <button type="button" onClick={() => openModal({ alt: title, src: backdrop})}>Show poster</button>
    </li>
  );
};
