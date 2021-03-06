import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import MessageCard from '../components/MessageCard';
import withAuth from '../hocs/withAuth';

class CommunityContainer extends Component{

  createMessages = () => {
    return this.props.comm.messages.map(msg => {
      return <MessageCard key={msg.title} msg={msg}/>
    })
  }

  render() {
    console.log('Inside Comm Cont', this.props.comm.messages)

    return (
      <Feed>
        {this.props.comm ? this.createMessages() : null}
      </Feed>
    )
  }
}

export default CommunityContainer;
