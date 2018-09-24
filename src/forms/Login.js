import React, { Component } from 'react';
import { Button, Form, Input } from 'formik-semantic-ui';

class Login extends Component {
  static defaultProps = {
    person: {
      emailAddress: '',
      username: '',
      password: '',
    },
  };
  _handleSubmit = (values, formikApi) => {
    // Make API Call
    console.log(values, formikApi);
    // Handle response / Errors
    // formikApi.setFieldError('emailAddress', 'Invalid Email');
    // formikApi.setSubmitting(false);
  };

  render() {
    return (
      <Form initialValues={this.props.person} onSubmit={this._handleSubmit}>
        <Input label="Email" name="emailAddress" />

        <Form.Group widths="2">
          <Input label="Username" name="username" />
          <Input label="Password" name="password" />
        </Form.Group>

        <Button.Submit>Submit</Button.Submit>
        <Button.Reset>Cancel</Button.Reset>
      </Form>
    );
  }
}

export default Login;


// <Form.Group widths="2">
//
// <Dropdown
//   label="Gender"
//   name="gender"
//   options={[
//     { text: 'Female', value: 'F' },
//     { text: 'Male', value: 'M' },
//   ]}
// />
// </Form.Group>
  // <TextArea label="Bio" name="bio" />
// <DatePicker
//   label="D.O.B."
//   name="dob"
//   inputProps={{
//     isOutsideRange: day => !moment(day).isSameOrBefore(moment()),
//     renderMonthElement: props => (
//       <DatePicker.YearMonthSelector {...props} />
//     ),
//   }}
// />

// <FileUpload label="Profile Picture Upload" name="fileUrl" />
