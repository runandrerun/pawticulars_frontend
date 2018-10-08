import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

const MessageCard = (props) => (
  <Feed.Event>
    <Feed.Label>
      {props.msg.user ? <img src={props.msg.user.avatar} /> : <img src='https://semantic-ui.com/images/avatar/small/jenny.jpg'/>}
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{props.msg.user.username}</Feed.User>
      </Feed.Summary>
      <Feed.Extra>{props.msg.content}</Feed.Extra>
      <Feed.Meta>
        <Feed.Like>

        </Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

export default MessageCard;

//
// <Icon name='like' />
//   4 Likes
