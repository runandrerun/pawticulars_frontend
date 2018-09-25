import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUser, auth } from './actions';
import { connect } from 'react-redux';
import Signup from './forms/Signup';
import Login from './forms/Login';
import Nav from './components/Nav';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      this.props.auth(token)
    } else {
      console.log(this.props)
    }
  }


  render() {
    const loggedIn = !!this.props.user.id
    console.log('loggedIn', loggedIn)
    return (
      <div>
        <Nav />
        <Route exact path='/' render={() => <Login logged={loggedIn} />}/>
        <Route exact path='/profile' render={() => <UserContainer logged={loggedIn} />}/>
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
export default connect(mapStateToProps, { loadUser, auth })(App);
