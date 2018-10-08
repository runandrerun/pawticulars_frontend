import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid, Rail, Segment } from 'semantic-ui-react'
import DogCard from '../components/DogCard';
import DetailDogCard from '../components/DetailDogCard';
import DogParkCard from '../components/DogParkCard';
import { loadDogParks } from '../actions';
import AllDogParks from './AllDogParks';
import withAuth from '../hocs/withAuth';
import '../custom/DogParkCont.css';

class DogContainer extends Component {


  state = {
    dogParkName: "Your Pup's Dog Park!"
  }
  userDogs = () => {
    return this.props.user.dogs.map(dog => {
      return <DetailDogCard dog={dog} owner={this.props.user} key={dog.name}
      fetchDogParkName={this.fetchDogParkName}/>
    })
  }

  componentDidMount() {
    console.log('Before Fetch', this.props.dogs)
  }

  allParks = () => {
  return <AllDogParks dogs={this.props.dogParks} />
  }

  fetchDogParkName = (value) => {
    this.setState({
      dogParkName: value
    })

  }

  render() {
    // console.log('UserContainer', this.props.user.dogs)
    return (
      <div className='align-all-info'>
      <div className='anthony'>
      <Grid centered columns={1}>
      <Grid.Column>
      <Segment padded='very'>
      <Header as='h2' textAlign="center">{this.state.dogParkName}</Header>
      <Divider />
      <div className="park-alignment">
        <DogParkCard fetchDogParkName={this.fetchDogParkName} doggyPark={this.props.doggyPark} />
      </div>
      <div>
          <Card.Group>

                <Rail close='very'position='left'>
                {this.props.user.dogs ? this.userDogs() : null}
                </Rail>
          </Card.Group>
        </div>
          </Segment>
          </Grid.Column>

          </Grid>
          </div>
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

export default withAuth(connect(mapStateToProps, { loadDogParks })(DogContainer));
