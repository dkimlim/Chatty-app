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

		const onKeyPress = ev => {
		    if (ev.key === "Enter") {
		      this.props.handleMessage(this.state);
		      this.setState({input: '', currentUser: this.state.username});
		    }
		 }

	 	const changedName = ev => {
	 		this.setState({inputValue: this.state.inputValue, currentUser: ev.target.value});
	 	};

	    return (
	        <footer className="chatbar">
		  		<input className="chatbar-username" placeholder="Your name (Optional)" onChange={changedName} value={this.state.currentUser}/>
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={changedText} value={this.state.input} onKeyPress={onKeyPress} />
                
	    	</footer>
	    );
	}
}
