import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ParkCardMatch from './ParkCardMatch';
import DogChips from './DogChips';

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

  // createDogChips = (dogsData) => {
  //   return <DogChips key={dogsData.name} dog={dogsData}/>
  //   // console.log('Inside create chips', dogsData)
  //   // return dogsData.map(dog => {
  //   //   console.log('Further inside create chips', dog)
  //   //   return <DogChips key={dog.name} dog={dog}/>
  //   // })
  // }
  //
  // mapDogParks = () => {
  //   if (this.props.doggyPark) {
  //   return this.props.doggyPark.map(dogPark => {
  //       return this.fetchDogParkDogs(dogPark)
  //     })
  //   } else {
  //     return null
  //   }
  // }
  //
  // fetchDogParkDogs = (dogPark) => {
  //   console.log('Inside fetch', dogPark)
  //   if (dogPark) {
  //   return fetch(`http://localhost:3000/dog_parks/${dogPark[0].id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization: localStorage.getItem('token')
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(dogParksData => this.mapToChips(dogParksData.dogs))
  //   } else {
  //     return null
  //   }
  // }
  //
  // mapToChips = (dogParksData) => {
  //   dogParksData.dogs.map(dog => {
  //     return this.createDogChips(dog)
  //   })
  // }


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log('Inside DogParkCard', this.props.doggyPark)
    console.log('FETCH TEST', this.fetchDogParkDogs())

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
        {this.state.value === 1 ? 'Community' : null}
        {this.state.value === 2 ? 'All Dogs' : null}

          <Typography className={classes.typography}></Typography>
      </div>
    );
  }
}

DogParkCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogParkCard);
