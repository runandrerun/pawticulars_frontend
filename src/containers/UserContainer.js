import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';

class UserContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DogCard dog={dog} key={dog.name}/>
    })
  }


  render() {
    // console.log(this.props.user.dogs)
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
  console.log(state)
  return {
    user: state.userState.currentUser
  }
}

export default connect(mapStateToProps)(UserContainer);
