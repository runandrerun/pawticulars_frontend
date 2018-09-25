import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

const userPups = (
  <a>
    <Icon color='red' name='heart' />
    1 Dog ||

    <Icon color='blue' name='user' />
    20 Friends
  </a>
)

const UserCard = ({user}) => (

  <Card
    image={require('./andre.jpg')}
    header={user.username}
    meta={user.location}
    description={user.bio}
    extra={userPups}
    centered={true}
    raised={true}
  />
)

export default UserCard
