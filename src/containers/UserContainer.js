import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';

class UserContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} key={dog.name} owner={this.props.user}/>
    })
  }


  render() {
    // console.log('UserContainer', this.props.user.dogs)
    return (
      <div>
      <Grid centered columns={3}>
      <Grid.Column>
      <Segment padded='very' color='red'>
      <Header as='h2' textAlign="center">Welcome {this.props.user.display_name}!</Header>
      <Divider />


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

export default connect(mapStateToProps)(UserContainer);
