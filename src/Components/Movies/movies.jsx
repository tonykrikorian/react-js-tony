import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie = id => {
    const { movies } = this.state;
    const moviesFiltered = movies.filter(movie => movie._id !== id);
    this.setState({ movies: moviesFiltered });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(value => (
              <tr key={value._id}>
                <td>{value.title}</td>
                <td>{value.genre.name}</td>
                <td>{value.numberInStock}</td>
                <td>{value.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteMovie(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
