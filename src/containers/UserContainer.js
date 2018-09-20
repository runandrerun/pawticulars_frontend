import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div></div>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    users: state.userState.users
  }
}

export default connect(mapStateToProps)(UserContainer);
