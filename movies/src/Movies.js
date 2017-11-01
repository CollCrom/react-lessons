import React, { Component } from 'react';

class Movie extends Component {
  deleteMovie = (e) => {
    console.log(e.currentTarget.value)
    this.props.remove(e.currentTarget.value)
  }
  render() {
    const movies = this.props.movies.map((m, i) => {
      return <li key={i}>{m} <button value={m} onClick={this.deleteMovie}>delete</button></li>
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
