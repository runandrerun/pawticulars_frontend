import React, { Component } from 'react';
// import MainPage from './containers/MainPage';
import UserContainer from './containers/UserContainer';
import { loadUsers } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    console.log(this.props.loadUsers())
    return (
      <UserContainer />
    );
  }
}

export default connect(null, { loadUsers })(App);
