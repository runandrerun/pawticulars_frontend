import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ParkCardMatch from './ParkCardMatch';
import DogChips from './DogChips';
import CommunityContainer from '../containers/CommunityContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 600,
    width: 400,
  },
  tabsRoot: {
    borderBottom: '1px solid #ffadb9',
  },
  tabsIndicator: {
    backgroundColor: '#ffadb9',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#ffadb9',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class DogParkCard extends React.Component {
  state = {
    value: 0,
    dogParkDogs: []
  };

  handleChange = (event, value) => {
    console.log('Inside DPC/Change', value)
    this.setState({ value });
  };

  createDogParkDetails = () => {
    if (this.props.doggyPark) {
      return this.props.doggyPark.map(dogPark => {
        return <ParkCardMatch key={dogPark.name} dogPark={dogPark} fetchDogParkDogs={this.fetchDogParkDogs} fetchDogParkName={this.props.fetchDogParkName}/>
      })
    } else {
      return null
    }
  }

  createDogChips = () => {
    return this.props.doggyPark.map(dogPark => {
      return dogPark.map(park => {
        return park.dogs.map(dog => {
          return <DogChips key={dog.name} dog={dog}/>
        })
      })
    })
  }

  createCommBoard = () => {
    return this.props.doggyPark.map(dogPark => {
      return dogPark.map(comm => {
        return <CommunityContainer comm={comm.community[0]}/>
      })
    })
  }


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log('Inside DogParkCard', this.props.doggyPark)

    return (

      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Details"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Community"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Dogs"
          />
        </Tabs>
        {this.state.value === 0 ? this.createDogParkDetails() : null}
        {this.state.value === 1 ? this.createCommBoard() : null}
        {this.state.value === 2 ? this.createDogChips() : null}

          <Typography className={classes.typography}></Typography>
      </div>
    );
  }
}

DogParkCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogParkCard);
