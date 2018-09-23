import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { Container, Header, Card, Divider, Grid } from 'semantic-ui-react'
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
      <Container text>
      <Header as='h2' textAlign="center">Welcome {this.props.user.display_name}!</Header>
      <Divider />

          <Card.Group>
                <UserCard user={this.props.user} />
                {this.props.user.dogs ? this.userDogs() : null}
          </Card.Group>

        </Container>
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
