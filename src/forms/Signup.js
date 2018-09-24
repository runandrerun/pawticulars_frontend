import React, { Component } from 'react';
import { Formik } from 'formik';
import moment from 'moment';
import { Header, Container, Segment } from 'semantic-ui-react';

import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  TextArea,
} from 'formik-semantic-ui';
// import { DatePicker, FileUpload } from '../custom/index';

class ExampleForm extends Component {
  _handleSubmit = (values, formikApi) => {
    console.log(values);
    setTimeout(() => {
      Object.keys(values).forEach(key => {
        formikApi.setFieldError(key, 'Some Error');
      });
      formikApi.setSubmitting(false);
    }, 1000);
  };

  render() {
    return (


      <Container style={{paddingTop: 50}}>
      <Header as='h2' attached="top">Signup</Header>
    <Segment attached>
      <Form
        initialValues={{
          emailAddress: '',
          username: '',
          password: '',
          gender: '',
          bio: '',
          fileUrl: '',
          dob: ''
        }}
        onSubmit={this._handleSubmit}
        render={({ handleReset }) => (
          <Form.Children>
            <Input label="Email" name="emailAddress" />

            <Form.Group widths="2">
              <Input label="Username" name="username" />
              <Form.Input type='password' label="Password" name="password" />
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

export default ExampleForm;
