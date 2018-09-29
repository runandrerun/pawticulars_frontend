import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import moment from 'moment';
import { Header, Container, Segment } from 'semantic-ui-react';
import { newUser } from '../actions';
import { connect } from 'react-redux';

import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  TextArea,
} from 'formik-semantic-ui';
// import { DatePicker, FileUpload } from '../custom/index';

class SignupForm extends Component {
  _handleSubmit = (values, formikApi) => {
    console.log(values);
    this.props.newUser(values)
    setTimeout(() => {
      Object.keys(values).forEach(key => {
        formikApi.setFieldError(key, `Invalid ${key}`);
      });
      formikApi.setSubmitting(false);
    }, 1000);
  // console.log(values)
  //   debugger;
  };

  render() {
    return (


      <Container style={{paddingTop: 50}}>
      <Header as='h2' attached="top">Signup</Header>
    <Segment attached>
      <Form
        initialValues={{
          email: '',
          username: '',
          password: '',
          bio: '',
        }}
        onSubmit={this._handleSubmit}
        render={({ handleReset }) => (
          <Form.Children>
            <Input label="Email" name="email" />

            <Form.Group widths="2">
              <Input label="Username" name="username" />
              <Input type='password' label="Password" name="password" />
            </Form.Group>

              <TextArea label="Bio" name="bio" />
            <Button.Submit primary>Submit</Button.Submit>
            <Button basic onClick={handleReset}>
              Cancel
            </Button>
          </Form.Children>
        )}
      />
    </Segment>
    </Container>
    );
  }
}

export default connect(null, { newUser })(SignupForm);
