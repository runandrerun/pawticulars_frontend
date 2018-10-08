import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Divider, Container } from 'semantic-ui-react';
import '../custom/DogParkCont.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};




function ParkCardMatch(props) {


  // console.log('Simple', props.dogPark)
  // console.log('Simple2', props.dogPark[0].id)
  const { classes } = props;
  return (
  <Container textAlign='center'>
    <Grid.Column>
      <Divider horizontal>{props.dogPark[0].name}</Divider>
      <div className="outside-dog"><div><Image src={props.dogPark[0].images} size='large' rounded/></div></div>
      <Divider horizontal>Location</Divider>
      {props.dogPark[0].location}
      <Divider horizontal>Description</Divider>
      {props.dogPark[0].description}
      <Divider horizontal>{props.dogPark[0].dog_run ? 'Dog Run' : null}{props.dogPark[0].off_leash ? 'Off Leash' : null}</Divider>
      {props.dogPark[0].dog_run ? 'This park has a dog run.' : null}{props.dogPark[0].off_leash ? 'This park has an off leash area.' : null}
      <Divider horizontal>Accessibility</Divider>
      {props.dogPark[0].accessibility ? 'This park is accessible.' : null}

    </Grid.Column>
  </Container>
  );
}

ParkCardMatch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkCardMatch);


// <Card className={classes.card}>
//   <CardActionArea>
//     <CardMedia
//       component="img"
//       className={classes.media}
//       height="200"
//       image={props.dogPark[0].images}
//       title={props.dogPark[0].name}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="headline" component="h2">
//         {props.dogPark[0].name}
//       </Typography>
//       <Typography component="p">
//         {props.dogPark[0].location}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Share
//     </Button>
//     <Button size="small" color="primary">
//       Learn More
//     </Button>
//   </CardActions>
// </Card>
