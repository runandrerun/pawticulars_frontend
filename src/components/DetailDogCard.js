import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import DogChips from './DogChips';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  genderIcon: {
    width: 20,
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  image: {
    width: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class DetailDogCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  createDogChips = () => {
    return this.props.dog.matches.map(match => {
      return <DogChips key={match.name} dog={match}/>
    })
  }


  render() {
    const { classes } = this.props;
    console.log(this.props.dog)
    const avatar = this.props.dog.avatar
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.dog.name[0]}
            </Avatar>
          }
          title={this.props.dog.name}
          subheader={this.props.owner.username}
        />
        <CardMedia
          className={classes.media}
          image={this.props.dog.avatar}
          title={this.props.dog.name}
        />
        <CardContent>

          <List>

                  <ListItem>
                  <Tooltip title="Breed">
                  <ListItemAvatar>
                  {this.props.dog.gender === 'Male' ? <img className={classes.genderIcon}src={require('../icons/dogseatboy.svg')}/> : <img className={classes.genderIcon}src={require('../icons/dogseatgirl.svg')}/>}
                </ListItemAvatar>
                </Tooltip>

                    <ListItemText
                      primary={this.props.dog.breed}
                    />
                  </ListItem>
                  <Divider />

                  <ListItem>
                  <Tooltip title="Size">
                  <ListItemAvatar>
                      {this.props.dog.gender === 'Male' ? <img className={classes.genderIcon}src={require('../icons/boyweight.svg')}/> : <img className={classes.genderIcon}src={require('../icons/girlweight.svg')}/>}
                  </ListItemAvatar>
                  </Tooltip>
                    <ListItemText
                      primary={this.props.dog.size}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                  <Tooltip title="Temperament">
                  <ListItemAvatar>
                      {this.props.dog.gender === 'Male' ? <img alt='Temperament' className={classes.genderIcon}src={require('../icons/boyheart.svg')}/> : <img className={classes.genderIcon}src={require('../icons/girlheart.svg')}/>}
                  </ListItemAvatar>
                  </Tooltip>
                    <ListItemText
                      primary={this.props.dog.temperament}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                  <Tooltip title="Energy">
                  <ListItemAvatar>
                      {this.props.dog.gender === 'Male' ? <img className={classes.genderIcon}src={require('../icons/boyenergy.svg')}/> : <img className={classes.genderIcon}src={require('../icons/girlenergy.svg')}/>}
                  </ListItemAvatar>
                  </Tooltip>
                    <ListItemText
                      primary={this.props.dog.energy}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                  <Tooltip title="Gender">
                  <ListItemAvatar>
                    {this.props.dog.gender === 'Male' ? <img className={classes.genderIcon}src={require('../icons/masculine.svg')}/> : <img className={classes.genderIcon}src={require('../icons/femmedog.svg')}/>}
                  </ListItemAvatar>
                  </Tooltip>
                    <ListItemText
                      primary={this.props.dog.gender}
                    />
                  </ListItem>
              </List>

        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Matches"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.dog ? this.createDogChips() : null}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

DetailDogCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(DetailDogCard);
