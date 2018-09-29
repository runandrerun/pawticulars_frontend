import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';
import DogParkCard from '../components/DogParkCard';
import { loadDogParks } from '../actions';
import AllDogParks from './AllDogParks';

class DogContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} owner={this.props.user} key={dog.name}/>
    })
  }

  componentDidMount() {
    console.log('Before Fetch', this.props.dogs)
  }

  allParks = () => {
  return <AllDogParks dogs={this.props.dogParks} />
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
      <DogParkCard doggyPark={this.props.doggyPark} />


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

// {this.props.dogParks.length > 0 ? this.allParks() : null}

const mapStateToProps = (state) => {
  return {
    user: state.userState.currentUser,
    dogs: state.userState.currentUser.dogs,
    doggyPark: state.userState.currentUser.dog_parks
  }
}

export default connect(mapStateToProps, { loadDogParks })(DogContainer);
