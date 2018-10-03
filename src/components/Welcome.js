import React, { Component } from 'react';
import { Provider, Heading, Subhead } from 'rebass';
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page';
import Splash from '../custom/Splash.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Splash from '../icons/PawticularsSplash2';
import Login from '../forms/Login';
import Signup from '../forms/Signup';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



class Welcome extends Component {

  state = {
    loginOpen: false,
    signupOpen: false,
    token: '',
  };

  handleLoginOpen = () => {
    this.setState({ loginOpen: true })
  };

  handleLoginClose = () => {
    this.setState({ loginOpen: false }, this.redirectToProfile)
  };

  handleSignupOpen = () => {
    this.setState({ signupOpen: true })
  };

  handleSignupClose = () => {
    this.setState({ signupOpen: false })
  };

  redirectToProfile = () => {
    return <Redirect to='/profile'/>
  }

  // componentDidMount() {
  //   localStorage.getItem('token') ? <Redirect to='/profile'/> : <Redirect to='/'/>
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState) {
  //
  //   }
  // }

  render() {
    if (localStorage.getItem('token')) {
      return <Redirect to='/profile'/>
    } else {
    return (

  <Provider>
    <Hero
      color="black"
      backgroundImage='https://res.cloudinary.com/dx34xrygi/image/upload/v1538495886/PawticularsSplash2.jpg'
    >
    <div className='splash-info'>
        <div className='pawticulars-title'><h1>Pawticulars</h1></div>
        <div className='subheader'><h2>matchmaking for dogs</h2></div>
      <div className='buttons'>
        <div className='button-text'><Button onClick={this.handleLoginOpen} variant='contained' size='large' color='primary'>Login</Button></div>
        <div className='button-text'><Button onClick={this.handleSignupOpen} variant='contained' size='large' color='primary'>Signup</Button></div>
      </div>
    </div>
    </Hero>
    <div className='login-dialog'>
    <Dialog
      open={this.state.loginOpen}
      onClose={this.handleLoginClose}
      aria-labelledby='login'
      aria-describedby='alert-dialog-description'
      >
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <Login />
        </DialogContentText>
      </DialogContent>
        </Dialog>
      </div>

      <div className='signup-dialog'>
      <Dialog
        open={this.state.signupOpen}
        onClose={this.handleSignupClose}
        aria-labelledby='login'
        aria-describedby='alert-dialog-description'
        >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Signup />
          </DialogContentText>
        </DialogContent>
          </Dialog>
        </div>

  </Provider>
    )
  }
}
}


export default Welcome;

// <DialogActions>
//       <Button onClick={this.handleLoginClose} color="primary">
//         Login
//       </Button>
//       <Button onClick={this.handleLoginClose} color="secondary" autoFocus>
//         Cancel
//       </Button>
//     </DialogActions>


// <DialogActions>
//       <Button onClick={this.handleSignupClose} color="primary">
//         Login
//       </Button>
//       <Button onClick={this.handleSignupClose} color="secondary" autoFocus>
//         Cancel
//       </Button>
//     </DialogActions>

// <DialogTitle id='login'>{'Login'}</DialogTitle>
// <div className='button-text'><CallToAction href="/login" mt={3}>Login</CallToAction></div>
// <div className='button-text'><CallToAction href="/signup" mt={3}>Signup</CallToAction></div>
