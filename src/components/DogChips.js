import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { selectedDogPark } from '../actions';
import { connect } from 'react-redux';
import MiniDogProfile from './MiniDogProfile';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const openProfile = false

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  let openProfile = true
  return <MiniDogProfile />
}

function miniProfile(dogData) {
  return <MiniDogProfile dog={dogData} />
}


function DogChips(props) {

  console.log('TESTESTESTEST', props)
  const { classes } = props;
  return (

      <Chip
              avatar={<Avatar>{props.dog.name[0]}</Avatar>}
              label={props.dog.name}
              className={classes.chip}
              color={props.dog.gender === 'Male' ? 'primary' : 'secondary'}
              onClick={() => miniProfile(props.dog)}
            />
    )
  }

  DogChips.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DogChips);
