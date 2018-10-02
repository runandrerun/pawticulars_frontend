import React from 'react';
import { Provider, Heading, Subhead } from 'rebass';
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page';
import Splash from '../custom/Splash.css';
// import Splash from '../icons/PawticularsSplash2';

const Welcome = props => (
  <Provider>
    <Hero
      color="black"
      backgroundImage='https://res.cloudinary.com/dx34xrygi/image/upload/v1538495886/PawticularsSplash2.jpg'
    >
    <div className='splash-info'>
        <div className='pawticulars-title'><h1>Pawticulars</h1></div>
      <div className='buttons'>
        <div className='button-text'><CallToAction href="/login" mt={3}>Login</CallToAction></div>
        <div className='button-text'><CallToAction href="/signup" mt={3}>Signup</CallToAction></div>
      </div>
    </div>
    </Hero>

  </Provider>
)

export default Welcome
