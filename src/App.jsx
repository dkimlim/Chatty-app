import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {

	//Initial state where props with initial users and message.
	constructor(props) {
		super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    // this.newMessage = this.newMessage.bind(this);
    this.state = {
      currentUser: {name: "Anonymous"}, 
      messages: []
    };
  }

    // Called after the component was rendered and it was attached to the
    // DOM. 
  componentDidMount() {

    this.socket.onopen = e => {
      console.log('Connected to WebSocket server');
    };
    // handle receiving a message from the websocket server
    // e is a `MessageEvent` object
    this.socket.onmessage = e => {
      console.log("received message", e);
      
      // Parse the message data into a JavaScript object using JSON.parse()
      let newMessage = JSON.parse(e.data);
      // concat the message to the list of messages in our state
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
      }
  }

  //helper to handle any text input in the ChatBar or when user changes their name.
  handleMessage = content => {
      const newMessage = {type: 'postMessage', username: content.currentUser, content: content.input};
      if (content.currentUser !== this.state.currentUser.username) {
        this.setState({currentUser: { name: content.currentUser }})
        const newNotification = {type: 'postNotification', content: `${this.state.currentUser.name} has changed their name to ${content.currentUser}.`}
        this.socket.send(JSON.stringify(newNotification))
      }

      this.socket.send(JSON.stringify(newMessage));
	}
  
    // Called any time the props or state changes. The JSX elements returned in this method will be rendered to the DOM.
    render() {
      return (
  	    <div>
  		    <Nav />
  		    <MessageList messages = {this.state.messages} />
  		    <ChatBar defaultValue = {this.state.currentUser.name} handleMessage={this.handleMessage} />
  		  </div>
      );
    }
}
export default App;

