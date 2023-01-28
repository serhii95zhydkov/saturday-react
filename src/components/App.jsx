import { Component } from "react";
import Button from "./Button/Button";
import { MoviesGallery } from "./MoviesGallery/MoviesGallery";
import {Modal} from "./Modal/Modal"
import { fetchApiMovies } from "./services/api";

export class App extends Component {
  state = {
    isMoviesListShow: false,
    movies: [],
    isLoading: false,
    page: 1,
    currentImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { isMoviesListShow, page } = this.state;
    if ((prevState.isMoviesListShow !== isMoviesListShow && isMoviesListShow) || (prevState.page !== page && isMoviesListShow)) {
      this.getMovies();
    }
    if (prevState.isMoviesListShow !== isMoviesListShow && !isMoviesListShow) {
      this.setState({
        movies: [],
        page: 1,
      })
    }
  }

  deleteMovie = (id) => {
    this.setState((prevState) => {
      return {
        movies: prevState.movies.filter((movie) => movie.id !== id),
      };
    });
  };

  showMovies = () => {
    this.setState((prevState) => {
      return {
        isMoviesListShow: !prevState.isMoviesListShow,
      };
    });
  };

  getMovies = () => {
    this.setState({ isLoading: true });
    fetchApiMovies(this.state.page)
      .then(({ data: { results } }) => {
        this.setState((prevState) => {
          return {
            movies: [...prevState.movies, ...results],
          };
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  openModal = (data) => {
    this.setState({
      currentImage: data,
    })
  }

  closeModal = () => {
    this.setState({currentImage: null})
  }


  render() {
    const { isMoviesListShow, movies, currentImage } = this.state;

    return (
      <>
        <Button
          text={isMoviesListShow ? "Hide movies list" : "Show movies list"}
          clickHeandler={this.showMovies}
        />
        {isMoviesListShow && (
          <>
            <MoviesGallery movies={movies} deleteMovie={this.deleteMovie} openModal={this.openModal} />
            <Button text="Load more..." clickHeandler={this.loadMore} />
          </>
        )}
        {currentImage && <Modal currentImage={currentImage} closeModal={this.closeModal} />}
      </>
    );
  }
}
