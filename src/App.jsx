import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {

	//Initial state where props with initial users and message.
	constructor(props) {
		super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Anonymous"}, 
      messages: [],
      userCount: 0
    };
  }

  // Called after the component was rendered and it was attached to the DOM. 
  componentDidMount() {

    this.socket.onopen = function(e) {
      console.log('Connected to WebSocket server');
    };

    // handles receiving a message from the websocket server
    this.socket.onmessage = function(e) {
      const newMessage = JSON.parse(e.data);
      const messages = this.state.messages.concat(newMessage);
      
      //Changes counter displayed to users.
      if ( messages[0].type === 'connectedUsers' ) {
        this.setState({ userCount : messages[0].count })
      } else {
        this.setState({messages: messages});
      }
    }.bind(this)
  }

  //helper to handle any text input in the ChatBar or when user changes their name.
  handleMessage = content => {
      const newMessage = {type: 'postMessage', username: content.currentUser, content: content.input};

      if ( !content.currentUser ) {
        currentUser: this.state.currentUser.name

      } else if ( content.currentUser !== this.state.currentUser.name ) {
        const newNotification = {type: 'postNotification', content: `${this.state.currentUser.name} has changed their name to ${content.currentUser}.`}
        this.setState( {currentUser: { name: content.currentUser }} )
        this.socket.send( JSON.stringify(newNotification) )
      }
      this.socket.send(JSON.stringify(newMessage));
	}
  
  // Called any time the props or state changes. The JSX elements returned in this method will be rendered to the DOM.
  render() {
    return (
	    <div>
		    <Nav connectedUsers={this.state.userCount} />
		    <MessageList messages = {this.state.messages} />
		    <ChatBar defaultValue = {this.state.currentUser.name} handleMessage={this.handleMessage} />
		  </div>
    );
  }
}
export default App;

