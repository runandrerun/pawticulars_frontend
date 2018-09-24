import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUser } from './actions';
import { connect } from 'react-redux';
import Signup from './forms/Signup';
import Nav from './components/Nav';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    // const loggedIn = {id: 1, username: "runandre", password: "123", email: "coolio@cool.com", location: "Bronx, NY", avatar: "img", display_name: "dreday"}
    this.props.loadUser(1)
  }

  render() {
    // console.log(this.props.loadUsers())
    return (
      <div>
        <Nav />
        <Route exact path='/' render={() => <UserContainer />}/>
        <Route exact path='/signup' render={() => <Signup />}/>
        <Route exact path='/dogparks' render={() => <UserContainer />}/>
        <Route exact path='/dogs' render={() => <UserContainer />}/>
      </div>
    );
  }
}

export default connect(null, { loadUser })(App);
