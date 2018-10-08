import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { newMessage } from '../actions';
import { connect } from 'react-redux';

class ResponseForm extends React.Component {
  state = {
    open: false,
    content: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    const messageData = {
      content: this.state.content,
      user_id: this.props.user.id,
      community_id: this.props.comm.id
    }
    this.props.newMessage(messageData)
    this.setState({ open: false });
  };

  handleChange = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Button color='primary' onClick={this.handleClickOpen}>Reply</Button>
        <Dialog
          contentStyle={{maxWidth: '400px', maxHeight: '300px',}}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.comm ? this.props.comm.title : null}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="response"
              label="Response"
              type="response"
              fullWidth
              multiline
              rowsMax="4"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.userState.currentUser
  }
}

export default connect(mapStateToProps, { newMessage })(ResponseForm)
