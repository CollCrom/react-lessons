import React, { Component } from 'react';

class Movie extends Component {
  deleteMovie = (e) => {
    console.log(e.currentTarget.value)
    this.props.remove(e.currentTarget.value)
  }
  editMovie = (e) => {
    console.log(e.currentTarget.innerText)
    this.props.showEdit(e.currentTarget.innerText)
  }
  render() {
    const movies = this.props.movies.map((m, i) => {
      return <div key={i}>
                <li onClick={this.editMovie}>{m}</li>
                <button value={m} onClick={this.deleteMovie}>delete</button>
              </div>
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
