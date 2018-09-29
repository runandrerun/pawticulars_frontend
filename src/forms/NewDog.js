import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';
import { Button, Form, Input } from 'formik-semantic-ui';




export default class NewDog extends Component {

  _handleSubmit = (values, formikApi) => {
    console.log(values);
    // this.props.newUser(values)
    setTimeout(() => {
      Object.keys(values).forEach(key => {
        formikApi.setFieldError(key, `Invalid ${key}`);
      });
      formikApi.setSubmitting(false);
    }, 1000);
  };

  render() {
    return(

      <Container style={{paddingTop: 50}}>
      <Header as='h2' attached="top">New Dog</Header>
    <Segment attached>
<Form
  onSubmit={this._handleSubmit}
  schema={{
    name: {
      label: 'Name',
      type: 'text',
      value: '',
      fieldProps: {
        width: 8,
      }
    },
    breed: {
      label: 'Breed',
      type: 'text',
      fieldProps: {
        width: 8,
      },
    },
    bio: {
      label: 'Bio',
      type: 'textarea',
      inputProps: {
        rows: '6',
      },
      fieldProps: {
        width: 8,
      }
    },
    temperament: {
      label: 'Temperament',
      type: 'dropdown',
      options: [
        {text: 'Confident', value: 'confident'},
        {text: 'Stable', value: 'stable'},
        {text: 'Submissive', value: 'submissive'},
        {text: 'Assertive', value: 'assertive'},
      ],
      fieldProps: {
        width: 8,
      }
    },
    size: {
      label: 'Size',
      type: 'dropdown',
      options: [
        {text: 'Toy - 2 - 24 lb', value: 'Toy'},
        {text: 'Small - 24 - 35 lb', value: 'Small'},
        {text: 'Medium - 35 - 55 lb', value: 'submissive'},
        {text: 'Large - 55 - 83 lb', value: 'assertive'},
        {text: 'X-Large - 83 - 94 lb', value: 'submissive'},
        {text: 'Grande - 94 - 120 lb', value: 'assertive'},
        {text: 'Giant - 120+ lb', value: 'Giant'},
      ],
      fieldProps: {
        width: 8,
      }
    },
    energy: {
      label: 'Energy',
      type: 'dropdown',
      options: [
        {text: 'Low', value: 'Low'},
        {text: 'Medium', value: 'Medium'},
        {text: 'High', value: 'High'},
        {text: 'Extremely High', value: 'Extremely High'},
      ],
      fieldProps: {
        width: 8,
      }
    },
    gender: {
      label: 'Gender',
      type: 'dropdown',
      options: [
        {text: 'Male', value: 'Male'},
        {text: 'Female', value: 'Female'},
      ],
      fieldProps: {
        width: 8,
      }
    },
  }}
>
  <Button.Submit>Submit</Button.Submit>
  <Button.Reset>Cancel</Button.Reset>
</Form>
</Segment>
</Container>

    )
  }
}

//
// <Container style={{paddingTop: 50}} textAlign='center'>
// <Header as='h2' attached="top">New Dog</Header>
// <Segment attached>
// <Form
// onSubmit={this._handleSubmit}
// schema={{
// name: {
// label: 'Name',
// type: 'text',
// value: '',
// fieldProps: {
//   width: 8,
// }
// },
// breed: {
// label: 'Breed',
// type: 'text',
// fieldProps: {
//   width: 8,
// },
// },
// bio: {
// label: 'Bio',
// type: 'textarea',
// inputProps: {
//   rows: '6',
// },
// fieldProps: {
//   width: 8,
// }
// },
// temperament: {
// label: 'Temperament',
// type: 'dropdown',
// options: [
//   {text: 'Confident', value: 'confident'},
//   {text: 'Stable', value: 'stable'},
//   {text: 'Submissive', value: 'submissive'},
//   {text: 'Assertive', value: 'assertive'},
// ],
// fieldProps: {
//   width: 8,
// }
// },
// gender: {
// label: 'Gender',
// type: 'dropdown',
// options: [
//   {text: 'Male', value: 'male'},
//   {text: 'Female', value: 'female'},
// ],
// fieldProps: {
//   width: 8,
// }
// },
// }}
// >
// <Button.Submit>Submit</Button.Submit>
// <Button.Reset>Cancel</Button.Reset>
// </Form>
// </Segment>
// </Container>
// gender: {
//   label: 'Gender',
//   type: 'radio',
//   options: [
//     {text: 'Male', value: 'male'},
//     {text: 'Female', value: 'female'}
//   ],
// },
