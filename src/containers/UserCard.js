// import React, { Component } from 'react';
// import { Card, Icon } from 'semantic-ui-react';
//
// const userPups = (
//   <a>
//     <Icon color='red' name='heart' />
//     {user.dogs.length} Dog ||
//
//     <Icon color='blue' name='user' />
//     20 Friends
//   </a>
// )
//
// const UserCard = ({user}) => (
//
//   <Card
//     image={require('./andre.jpg')}
//     header={user.username}
//     meta={user.location}
//     description={user.bio}
//     extra={userPups}
//     centered={true}
//     raised={true}
//   />
// )
//
// export default UserCard;

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = ({user}) => (
  <Card>
    <Image src={user.avatar} />
    <Card.Content>
      <Card.Header>{user.username}</Card.Header>
      <Card.Meta>
        {user.location}
      </Card.Meta>
      <Card.Description>{user.bio}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='heart' color='red'/>
        {user.dogs.length} {user.dogs.length === 1 ? 'Dog' : 'Dogs'}
      </a>
      {'  |  '}
      <a>
        <Icon name='user' color='blue'/>
        {user.all_friends.length} {user.all_friends.length === 1 ? 'Friend' : 'Friends'}
      </a>
    </Card.Content>
  </Card>
)

export default UserCard;
