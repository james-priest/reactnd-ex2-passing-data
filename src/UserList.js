import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const {movieID, profiles, users} = this.props;
    const profilesArr = profiles.filter(profile => (Number(profile.favoriteMovieID) === movieID));
    console.log('profilesArr', profilesArr, profilesArr.length);
    
    if(profilesArr.length > 0) {
      return (
        <div>
          <p>Liked by:</p>
          <ul>
            {profiles.filter(profile => (
              Number(profile.favoriteMovieID) === movieID
            )).map(profile => {
              // console.log(`profile.userID: ${profile.userID}`);
              return <li key={profile.userID}>{users[profile.userID].name}</li>
            })}
          </ul>
        </div>
      )
    } else {
       return  <p>None of the current users liked this movie</p>
    }
  }
}

export default UserList;
