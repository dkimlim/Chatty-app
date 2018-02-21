import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {

	//Initial state where props with initial users and message.
	constructor(props) {
		super(props);

		this.state = {
			currentUser: {name: "Bob"}, 
			messages: [
			  {currentUser: "Bob", 
        content: "Has anyone seen my marbles?", 
        key: 1}, 
			  {currentUser: "Anonymous", 
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.", 
        key: 2}
			]
		}
	}

    // Called after the component was rendered and it was attached to the
    // DOM. This is a good place to make AJAX requests or setTimeout.
  componentDidMount() {
      console.log("componentDidMount <App />");
  		setTimeout(() => {
    		console.log("Simulating incoming message");
    
    		const newMessage = {key: 3, currentUser: "Michelle", content: "Hello there!"};
    		const messages = this.state.messages.concat(newMessage)
   
    		this.setState({messages: messages})
  	  }, 3000);
	}


  handleMessage = content => {
      console.log("HIDHOAD", this.state);
      const newMessage = {
          type: 'message',
          currentUser: this.state.currentUser.name,
          content: content
          // key:
      }


	    let messages = this.state.messages
	    messages.push(newMessage)
	    this.setState({messages: messages})
	}
    
		    // <ChatBar defaultValue = {this.state.currentUser.name} />
    render() {
      return (
	    <div>
		    <Nav />
		    <MessageList messages = {this.state.messages} />
		    <ChatBar currentUser = {this.state.currentUser.name} handleMessage={this.handleMessage} />
		</div>
      )
    }
}
export default App;

