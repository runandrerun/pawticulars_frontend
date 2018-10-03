import React, { Component } from 'react';
import { Button, Form, Input } from 'formik-semantic-ui';
import { Header, Container, Segment } from 'semantic-ui-react';
import { logUser } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    user: {
      username: '',
      password: '',
    },
  };
  _handleSubmit = (values, formikApi) => {
    // Make API Call
    // console.log(values, formikApi);
    // console.log('values:',values)
    // console.log('formikApi', formikApi)
    // Handle response / Errors
    this.props.logUser(values)
    .then(this.returnRedirect)
    // formikApi.setFieldError('username', 'Invalid!');
    // formikApi.setSubmitting(false);
  };

  returnRedirect = (userRes) => {
    if (userRes) {
      return this.props.history.push({pathname: '/profile'})
    } else {
      return null
    }
  }


  render() {
    if (this.props.authenticated === false) {
      return <Redirect to='/profile'/>
    } else {
    return (
    <Container style={{paddingTop: 50}}>
      <Header as='h2' attached='top'>Login</Header>
      <Segment attached>
      <Form onSubmit={this._handleSubmit}>



          <Input label="Username" name="username"
          onChange={this.handleChange}
           />
          <Input label="Password" name="password"
          onChange={this.handleChange}/>


        <Button.Submit>Submit</Button.Submit>
        <Button.Reset>Cancel</Button.Reset>
      </Form>
      </Segment>
    </Container>
    );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.userState.authenticating
  }
}

export default withRouter(connect(mapStateToProps, { logUser })(Login));
