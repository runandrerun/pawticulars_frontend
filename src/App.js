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
import Loader from './containers/Loader';


class App extends Component {
  state = {
    active: false,
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      this.props.auth(token)
    } else {
      return null
    }
  }


  // verifyUser = () => {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token')
  //     this.props.auth(token)
  //   } else {
  //     return null
  //   }
  // }
  setLoggedIn = () => {
    if (this.props.user) {
      return !!this.props.user.id
    } else {
      return null
    }
  }

  // const loggedIn = !!this.props.user.id

  render() {
    console.log('INSIDE APP', this.props.user)

    const loggedIn = this.setLoggedIn()
    // console.log('loggedIn', loggedIn)
    console.log('CHECKING ROUTE', loggedIn)
    return (

      <div>
        {this.props.location.pathname === '/' ? null : <Nav logged={loggedIn} user={this.props.user}/>}

        {this.props.user ? <Switch><Route exact path='/' render={() => <Welcome logged={loggedIn} />}/>
        <Route exact path='/profile' render={() => <UserContainer loggedIn={loggedIn} />}/>
        <Route exact path='/signup' render={() => <Signup />}/>
        <Route exact path='/dogparks' render={() => <DogParkContainer loggedIn={loggedIn} />}/>
        <Route exact path='/dogs' render={() => <DogContainer loggedIn={loggedIn} />}/>
        <Route exact path='/login' render={() => <Login loggedIn={loggedIn}/>}/>
        <Route exact path='/newdog' render={() => <NewDog loggedIn={loggedIn}/>}/>
        <Route exact path='/pawty' render={() => <Loader user={this.props.user}/>}/>
        </Switch>: null}


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
