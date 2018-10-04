import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import withAuth from '../hocs/withAuth';
import { Redirect } from 'react-router-dom';
const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function Loader(props) {
  const { classes } = props;
    if (!!props.user.id) {
      return <Redirect to='/profile'/>
    } else {
    return (
      <div>
        <CircularProgress className={classes.progress} size={100} style={{ color: purple[500] }}/>
        {setTimeout(() => {return <Redirect to='/profile'/>}, 3000)}
      </div>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withAuth(withStyles(styles)(Loader));
