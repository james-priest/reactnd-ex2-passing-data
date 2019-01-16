import React, { Component } from 'react';
import UserList from './UserList.js';

class PopularMovies extends Component {
  render() {
    const {profiles, movies, users } = this.props;
    const moviesArr = Object.values(movies);
    console.log('moviesArr', moviesArr);
    return (
      <div>
        {moviesArr.map(movie => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <UserList movieID={movie.id} profiles={profiles} users={users} />
          </div>
        ))}
      </div>
    )
  }
}

export default PopularMovies;