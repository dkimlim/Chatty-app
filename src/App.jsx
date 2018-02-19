import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {

	//Initial state where props with initial users and message.
	constructor(props) {
		super(props);
		this.state = {currentUser: 
						{name: "Bob"}, 
  						messages: [{
					      username: "Bob",
					      content: "Has anyone seen my marbles?",
					    } , {
					      username: "Anonymous",
					      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
					    }]
		}
	}

    // Called after the component was rendered and it was attached to the
    // DOM. This is a good place to make AJAX requests or setTimeout.
    componentDidMount() {}


    render() {
      return (
	    <div>
		    <Nav />
		    <MessageList this.state.messages />
		    <ChatBar this.state.currentUser />
		</div>
      );
    }
}
export default App;

