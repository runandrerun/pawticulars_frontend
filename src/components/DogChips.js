import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { selectedDogPark } from '../actions';
import { connect } from 'react-redux';

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

function DogChips(props) {
  console.log('TESTESTESTEST', props)
  const { classes } = props;
  return (

      <Chip
              avatar={<Avatar>{props.dog.name[0]}</Avatar>}
              label={props.dog.name}
              className={classes.chip}
              color={props.dog.gender === 'Male' ? 'primary' : 'secondary'}
            />
    )
  }

  DogChips.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DogChips);
