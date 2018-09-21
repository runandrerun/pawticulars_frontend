import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUsers } from './actions';
import { connect } from 'react-redux';
// import NavBar from './components/NavBar';
import Nav from './components/Nav';

class App extends Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    console.log(this.props.loadUsers())
    return (
      <div>
        <Nav />
        <UserContainer />
      </div>
    );
  }
}

export default connect(null, { loadUsers })(App);
