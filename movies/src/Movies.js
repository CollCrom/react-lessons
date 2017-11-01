import React, { Component } from 'react';

class Movie extends Component {
  render() {

    const movies = this.props.movies.map((m, i) => {
      return <li key={i}>{m}</li>
    })

    return (
      <div>
        <h3>{this.props.username}'s movie'</h3>
        <ul>
          {movies}
        </ul>
      </div>
      )
  }
}









export default Movie;
