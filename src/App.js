import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUser } from './actions';
import { connect } from 'react-redux';
import Signup from './forms/Signup';
import Login from './forms/Login';
import Nav from './components/Nav';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  // componentDidMount() {
  //   // const loggedIn = {id: 1, username: "runandre", password: "123", email: "coolio@cool.com", location: "Bronx, NY", avatar: "img", display_name: "dreday"}
  //   this.props.loadUser(1)
  // }

  render() {
    console.log(this.props.user)
    const loggedIn = !!this.props.user.id
    console.log('loggedIn', loggedIn)
    return (
      <div>
        <Nav />
        <Route exact path='/' render={() => <UserContainer />}/>
        <Route exact path='/signup' render={() => <Signup />}/>
        <Route exact path='/dogparks' render={() => <UserContainer />}/>
        <Route exact path='/dogs' render={() => <UserContainer />}/>
        <Route exact path='/login' render={() => <Login loggedIn={loggedIn}/>}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.userState.currentUser
  }
}
export default connect(mapStateToProps, { loadUser })(App);
