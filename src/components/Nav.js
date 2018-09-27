import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Menu from "@material-ui/core/Menu";
import "../index.scss";
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../actions';
import { connect } from 'react-redux';

// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 150;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  linkColors: {
    color: 'white',
    '&:hover': {
      color: 'white',
      opacity: 1,
    }
  },
  title: {
    marginLeft: 40,
    marginRight: 5,
  },
  rightSide: {
    marginRight: 40,
    marginLeft: 5,
  },
  navLinks: {
    marginRight: 5,
    marginLeft: 5,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class Nav extends React.Component {
  state = {
    openDrawer: false,
    anchor: 'left',
    auth: true,
    anchorEl: null
  };

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked }, () => this.props.logout());
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (e) => {
    this.setState({ anchorEl: null });
  };

  // navButtons = () => {
  //   if (!!this.props.currentUser.id) {
  //
  //   return <Typography variant="button" color="inherit" className={classes.navLinks}>
  //       Dogs
  //     </Typography>
  //     <Typography variant="button" color="inherit" className={classes.navLinks}>
  //       Dog Parks
  //     </Typography>
  //     <Typography variant="button" color="inherit" className={classes.navLinks}>
  //       <Link to='/profile'>@{this.props.user.username}</Link>
  //     </Typography>
  //     {auth && (
  //       <div>
  //         <IconButton
  //           className={classes.rightSide}
  //           aria-owns={open ? "menu-appbar" : null}
  //           aria-haspopup="true"
  //           onClick={this.handleMenu}
  //           color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <Menu
  //           id="menu-appbar"
  //           anchorEl={anchorEl}
  //           anchorOrigin={{
  //             vertical: "top",
  //             horizontal: "right"
  //           }}
  //           transformOrigin={{
  //             vertical: "top",
  //             horizontal: "right"
  //           }}
  //           open={open}
  //           onClose={this.handleClose}
  //         >
  //           <MenuItem onClick={this.handleClose}><Link to='/profile'>Profile</Link></MenuItem>
  //
  //           <MenuItem onClick={this.handleClose}><Link to='/login'>Logout</Link></MenuItem>
  //         </Menu>
  //       </div>
  //     )}
  //   } else {
  //
  //   return <div>
  //     <Typography variant="button" color="inherit" className={classes.navLinks}>
  //       Login
  //     </Typography>
  //     <Typography variant="button" color="inherit" className={classes.navLinks}>
  //       <Link to='/profile'>Signup</Link>
  //     </Typography>
  //     </div>
  //   }
  // }



  render() {
    const { classes, theme } = this.props;
    const { anchor, openDrawer, auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
          <MenuItem><Link to='/dogs'>Dogs</Link></MenuItem>
          <MenuItem><Link to='/dogparks'>Dog Parks</Link></MenuItem>
        <Divider />
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    console.log('LoggedIn?', this.props.loggedIn)
    return (
      <div className={classes.root}>

          <AppBar
            style={{ backgroundColor: "#FFB6C1" }}
            className={classNames(classes.appBar, {
              [classes.appBarShift]: openDrawer,
              [classes[`appBarShift-${anchor}`]]: openDrawer,
            })}
          >
            <Toolbar disableGutters={!openDrawer}>

              <img src={require('./footprint.svg')}
                alt="Pawticulars"
                className={classes.title}
                height={'20px'}
                width={'20px'}/>
              <Typography variant="title" color="white" style={{flex:1}}>
                <Link className={classes.linkColors} to='/'>Pawticulars</Link>
              </Typography>

              <Typography variant="button" color="inherit" className={classes.navLinks}>
                  <Link className={classes.linkColors} to='/dogs'>Dogs</Link>
                </Typography>
                <Typography variant="button" color="inherit" className={classes.navLinks}>
                  <Link className={classes.linkColors} to='/dogparks'>Dog Parks</Link>
                </Typography>
                <Typography variant="button" color="inherit" className={classes.navLinks}>
                  <Link className={classes.linkColors} to='/profile'>@{this.props.user.username}</Link>
                </Typography>
                {auth && (
                  <div>
                    <IconButton
                      className={classes.rightSide}
                      aria-owns={open ? "menu-appbar" : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}><Link to='/profile'>Profile</Link></MenuItem>

                      <MenuItem onClick={this.handleClose}><Link to='/login'>Logout</Link></MenuItem>
                    </Menu>
                  </div>
                )}

            </Toolbar>
          </AppBar>
          {before}

          {after}

      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.userState.authenticating,
    user: state.userState.currentUser
  }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, { logout })(Nav));

// <main
//   className={classNames(classes.content, classes[`content-${anchor}`], {
//     [classes.contentShift]: open,
//     [classes[`contentShift-${anchor}`]]: open,
//   })}
// >
//   <div className={classes.drawerHeader} />
// </main>
//
// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch
//         checked={auth}
//         onChange={this.handleChange}
//         aria-label="LoginSwitch"
//       />
//     }
//     label={this.props.authenticated === false ? 'Logged In' : 'Logged Out'}
//   />
// </FormGroup>

// <IconButton
//   color="inherit"
//   aria-label="Open drawer"
//   onClick={this.handleDrawerOpen}
//   className={classNames(classes.menuButton, openDrawer && classes.hide)}
// >
//   <MenuIcon />
// </IconButton>
