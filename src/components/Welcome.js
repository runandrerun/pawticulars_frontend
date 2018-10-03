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
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form } from 'formik';
import LoginStyling from '../custom/LoginStyling.css';
import { logUser } from '../actions';
import { TextField } from 'formik-material-ui';
import { LinearProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';



class Welcome extends Component {

  state = {
    user: {
      username: '',
      password: '',
    },
    loginOpen: false,
    signupOpen: false,
    token: '',
  };

  handleLoginOpen = () => {
    this.setState({ loginOpen: true })
  };

  handleLoginClose = (e, values, formikApi) => {
    e.preventDefault()
    // this._handleSubmit(values, formikApi)
    // console.log('inside handle close', values)
    this.setState({ loginOpen: false }, () => this._handleSubmit(values, formikApi))
  };

  handleSignupOpen = () => {
    this.setState({ signupOpen: true })
  };

  handleCancel = () => {
    this.setState({ signupOpen: false })
  };

  handleSignupClose = () => {
    this.setState({ signupOpen: false })
  };

  // redirectToProfile = (values, formikApi) => {
  //   this._handleSubmit(values, formikApi)
  //   return <Redirect to='/profile'/>
  // }

  _handleSubmit = (values, formikApi) => {
    // e.preventDefault()
    // console.log('inside submit', e)
    // console.log('inside values', values)
    // console.log('inside values', formikApi)
    this.props.logUser(values)
    .then(this.returnRedirect)

  };

    returnRedirect = (userRes) => {
      console.log('return redirect', userRes.user)
      if (userRes) {
        return this.props.history.push({pathname: '/profile'})
      } else {
        return null
      }
    }


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
      <DialogTitle id="simple-dialog-title">Login</DialogTitle>


      <DialogContent>
      <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 500);
      this._handleSubmit(values)
      }}
      render={({submitForm, isSubmitting, values}) => (
      <Form>
        <Field type="username" label="Username" name="username" component={TextField} fullWidth />
        <br />
        <Field
          fullWidth
          type="password"
          label="Password"
          name="password"
          component={TextField}
        />
        <br />
        {isSubmitting && <LinearProgress />}
        <br />
        <Button
          variant="raised"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Form>
      )}
      />
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



export default withRouter(connect(null, { logUser })(Welcome));

  // alert(JSON.stringify(values, null, 2));


// VALIDATION
// validate={values => {
// const errors: Partial<Values> = {};
// if (!values.username) {
//   errors.username = 'Required';
// } else if (
//   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
// ) {
//   errors.username = 'Invalid Username';
// }
// return errors;
// }}



// <DialogContent>
// <Formik
// initialValues={{username: '', password: ''}}
// validate={values => {
// const errors: Partial<Values> = {};
// if (!values.email) {
//   errors.email = 'Required';
// } else if (
//   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// ) {
//   errors.email = 'Invalid Username';
// }
// return errors;
// }}
// onSubmit={(values, {setSubmitting}) => {
// setTimeout(() => {
//   setSubmitting(false);
//   alert(JSON.stringify(values, null, 2));
// }, 500);
// }}
// render={({submitForm, isSubmitting, values}) => (
// <Form onSubmit={this._handleSubmit}>
//   <Field type="username" label="Username" name="username" component={TextField} fullWidth />
//   <br />
//   <Field
//     fullWidth
//     type="password"
//     label="Password"
//     name="password"
//     component={TextField}
//   />
//   <br />
//   {isSubmitting && <LinearProgress />}
//   <br />
//   <Button
//     variant="raised"
//     color="primary"
//     disabled={isSubmitting}
//     onClick={submitForm}
//   >
//     Submit
//   </Button>
// </Form>
// )}
// />
// </DialogContent>


// <form onSubmit={this._handleSubmit}>
// <DialogContent>
// <TextField
//         autoFocus
//         margin="dense"
//         id="username"
//         label="Username"
//         type="Username"
//         fullWidth
//       />
//
//       <TextField
//               autoFocus
//               margin="dense"
//               id="password"
//               label="Password"
//               type="Password"
//               fullWidth
//             />
// </DialogContent>
//             <DialogActions>
//                   <Button type="submit" color="primary">
//                     Login
//                   </Button>
//                   <Button onClick={this.handleCancel} color="secondary" autoFocus>
//                     Cancel
//                   </Button>
//                 </DialogActions>
//             </form>



// <Form onSubmit={this.handleLoginClose}>
// <DialogContent>
// <TextField
//         autoFocus
//         margin="dense"
//         id="username"
//         label="Username"
//         type="Username"
//         fullWidth
//       />
//
//       <TextField
//               autoFocus
//               margin="dense"
//               id="password"
//               label="Password"
//               type="Password"
//               fullWidth
//             />
// </DialogContent>
//             <DialogActions>
//                   <Button type="submit" color="primary">
//                     Login
//                   </Button>
//                   <Button onClick={this.handleCancel} color="secondary" autoFocus>
//                     Cancel
//                   </Button>
//                 </DialogActions>
//             </Form>

// <TextField
// id="login"
// label="Login"
// type="login"
// className='login-space'
// margin="dense"
// variant="outlined"
// fullWidth
// />
//
// <TextField
// id="password"
// label="Password"
// type="password"
// className='login-space'
// margin="dense"
// variant="outlined"
// fullWidth
// />
// <DialogContentText id='alert-dialog-description'>
// <form>
// <TextField
// id="login"
// label="Login"
// type="login"
// className={style.textField}
// margin="normal"
// variant="outlined"
// />
// <TextField
// id="password"
// label="Password"
// type="password"
// className={style.textField}
// margin="normal"
// variant="outlined"
// />
// </form>
//
// </DialogContentText>
// <DialogActions>
//       <Button onClick={this.handleLoginClose} color="primary">
//         Login
//       </Button>
//       <Button onClick={this.handleLoginClose} color="secondary" autoFocus>
//         Cancel
//       </Button>
//     </DialogActions>
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
