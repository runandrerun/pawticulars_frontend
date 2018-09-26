import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';
import DogParkCard from '../components/DogParkCard';


class DogParkContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} owner={this.props.user} key={dog.name}/>
    })
  }


  render() {
    // console.log('UserContainer', this.props.user.dogs)
    return (
      <div>
      <Grid centered columns={3}>
      <Grid.Column>
      <Segment padded='very'>
      <Header as='h2' textAlign="center">Dog Park!</Header>
      <Divider />
      <DogParkCard />


          <Card.Group>

                <Rail close='very' position='left'>
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
  return {
    user: state.userState.currentUser,
    dogs: state.userState.currentUser.dogs
  }
}

export default connect(mapStateToProps)(DogParkContainer);
