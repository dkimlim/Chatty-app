import React, {Component} from 'react';
import Message from './Message.jsx';

export default class MessageList extends Component {
  render () {
    const messages = this.props.messages.map((message) => {
            return <Message currentUser={message.currentUser} content={message.content} key={message.key} />
    });

    return (
      <main className="messages">
      {messages}
      </main>
    )
  }
}
