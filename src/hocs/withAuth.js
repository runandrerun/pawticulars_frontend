import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

const withAuth = (WrappedComponent) => {
  return class extends Component {
    render () {
      if (this.props.loggedIn) {
        return <WrappedComponent {...this.props} />
      } else if (localStorage.getItem('token')) {
        return <div className='container'> Loading </div>
      } else {
      return  <Redirect to='/' />
    }
  }
}
}

export default withAuth
