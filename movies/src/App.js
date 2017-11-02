import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import Movie from './Movies.js'
import Edit from './edit.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      movies: ['dogma', 'die hard', 'up', 'die hard 15'],
      isLoggedIn: false,
      showEdit: false,
      editedItem: ''
    }
  }
  login = (username) => {
    const state = this.state;
    state.username = username;
    state.isLoggedIn = true;
    this.setState(state);
  }
  deleteItem = (movie) => {
    const state = this.state;
    const index = state.movies.indexOf(movie)
    state.movies.splice(index, 1);
    this.setState(state);
  }
  showEdit = (editedItem) => {
    const state = this.state;
    state.showEdit = !state.showEdit;
    state.editedItem = editedItem;
    this.setState(state)
    console.log(this.state, ' this is state', editedItem)
  }
  editMovie = (movie) => {
    const index = this.state.movies.indexOf(this.state.editedItem)
    const state = this.state;
    state.movies[index] = movie;
    state.showEdit = !this.state.showEdit;
    this.setState(state)
    //which movie is being edited, the movie we are changing it into
    console.log(movie)
  }
  render() {
    console.log(this.state, ' this state in render')
    return (
      <div>
        {this.state.isLoggedIn ?  <Movie showEdit={this.showEdit} movies={this.state.movies} username={this.state.username} remove={this.deleteItem}/> :  <Login login={this.login}/>}
        <Edit showEdit={this.state.showEdit} editedItem={this.state.editedItem} editMovie={this.editMovie}/>
      </div>
    );
  }
}

export default App;
