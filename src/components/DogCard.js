import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

const owner = (
  <a>
    <Icon color='red' name='heart' />
    1
  </a>
)

const DogCard = ({dog}) => (
  <Card
    image={require('./panda.jpg')}
    header={dog.name}
    meta={dog.age}
    description={dog.bio}
    extra={owner}
    centered={true}
  />
)

export default DogCard
