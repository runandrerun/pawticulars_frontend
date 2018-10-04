import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';
import Nav from '../components/Nav';
import UserActivity from './UserActivity';
import { Feed, Icon } from 'semantic-ui-react';
import withAuth from '../hocs/withAuth';
import Loader from './Loader';


class UserContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} key={dog.name} owner={this.props.user}/>
    })
  }

  userFeed = () => {
    return this.props.user.messages.map(msg => {
      // console.log('MSG MAP', msg)
      // console.log('MSG MAP 2nd', msg.user)
      return <UserActivity key={msg.id} msg={msg}/>
    })
  }



  render() {
    console.log('UserContainer', this.props.user.messages)
    if (localStorage.getItem('token')) {
    return (
      <div>
      <Grid centered columns={3}>
      <Grid.Column>
      <Segment padded='very'>
      <Header as='h2' textAlign="center">Welcome {this.props.user.username}!</Header>
      <Divider />
      <Feed>
        {this.props.user.messages ? this.userFeed() : null}
      </Feed>



          <Card.Group>
          <Rail close='very' position='left'>
                <UserCard user={this.props.user} />
                </Rail>
                <Rail close='very' position='right'>
                {this.props.user.dogs ? this.userDogs() : null}
                </Rail>
          </Card.Group>
          </Segment>
          </Grid.Column>
          </Grid>


      </div>
    )
  } else {
  return <Loader />
    }
  }
}

const mapStateToProps = (state) => {
  console.log('User', state)
  console.log('Dogs', state.userState.currentUser.dogs)
  return {
    user: state.userState.currentUser,
    dogs: state.userState.currentUser.dogs
  }
}

export default withAuth(connect(mapStateToProps)(UserContainer));
