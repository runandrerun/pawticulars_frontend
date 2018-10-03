import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import Pagination from '../hocs/Pagination'
import withAuth from '../hocs/withAuth';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});








function AllDogParks(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {console.log(props.dogs)}
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {props.dogs.map((dogPark, index) => (
          <GridListTile key={index}>
            <img src={dogPark.images} alt={dogPark.name} />
            <GridListTileBar
              title={dogPark.name}
              subtitle={<span>{dogPark.location}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AllDogParks.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     dogParks: state.dogParkState.dogParks
//   }
// }
export default Pagination(withStyles(styles)(AllDogParks));
