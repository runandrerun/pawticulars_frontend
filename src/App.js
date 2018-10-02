import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUser, auth } from './actions';
import { connect } from 'react-redux';
import Signup from './forms/Signup';
import Login from './forms/Login';
import Nav from './components/Nav';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import DogParkContainer from './containers/DogParkContainer';
import DogContainer from './containers/DogContainer';
import AllDogParks from './containers/AllDogParks';
import NewDog from './forms/NewDog';
import Welcome from './components/Welcome';


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
        <Nav logged={loggedIn} user={this.props.user}/>
        <Switch>
        <Route exact path='/' render={() => <Welcome logged={loggedIn} />}/>
        <Route exact path='/profile' render={() => <UserContainer logged={loggedIn} />}/>
        <Route exact path='/signup' render={() => <Signup />}/>
        <Route exact path='/dogparks' render={() => <DogParkContainer logged={loggedIn} />}/>
        <Route exact path='/dogs' render={() => <DogContainer logged={loggedIn} />}/>
        <Route exact path='/login' render={() => <Login loggedIn={loggedIn}/>}/>
        <Route exact path='/newdog' render={() => <NewDog loggedIn={loggedIn}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.userState.currentUser,
    dogParks: state.dogParkState.dogParks
  }
}
export default withRouter(connect(mapStateToProps, { loadUser, auth })(App));
