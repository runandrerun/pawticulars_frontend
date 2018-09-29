import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';
import DogParkCard from '../components/DogParkCard';
import { loadDogParks } from '../actions';
import AllDogParks from './AllDogParks';
import SimpleDogParkCard from '../components/SimpleDogParkCard';

class DogParkContainer extends Component {


  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} owner={this.props.user} key={dog.name}/>
    })
  }

  componentDidMount() {
    this.props.loadDogParks()
    console.log(this.props.dogParks)
  }

  allParks = () => {
  return <AllDogParks dogs={this.props.dogParks} />
  }

  allDogParks = () => {
    return this.props.dogParks.map(dogPark => {
      return <SimpleDogParkCard dogPark={dogPark} />
    })
  }

  // {this.props.dogParks.length > 0 ? this.allParks() : null}
  render() {
    // console.log('UserContainer', this.props.user.dogs)
    return (
      <Container>
      <div>
      <Grid centered columns={3}>


      {this.props.dogParks.length > 0 ? this.allDogParks() : null}


          </Grid>
      </div>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.userState.currentUser,
    dogs: state.userState.currentUser.dogs,
    dogParks: state.dogParkState.dogParks
  }
}

export default connect(mapStateToProps, { loadDogParks })(DogParkContainer);
