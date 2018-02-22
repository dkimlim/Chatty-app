import React, {Component} from 'react';

export default class ChatBar extends Component {
	constructor(props) {
		super(props);
		this.state = {input: '', currentUser: props.defaultValue};
	}

	render() {

		const changedText = ev => {
			this.setState({input: ev.target.value, currentUser: this.state.currentUser});
		}

		const sendMessage = ev => {
	    if (ev.key === "Enter") {
	      this.props.handleMessage(this.state);
	      this.setState({input: '', currentUser: this.state.currentUser});
	    }
	 }

	    return (
	        <footer className="chatbar">
		  		<input className="chatbar-username" placeholder="Your Name (Optional)" value={this.state.currentUser}/>
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={changedText} value={this.state.input} onKeyPress={sendMessage} />
                
	    	</footer>
	    );
	}
}
