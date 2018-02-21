import React, {Component} from 'react';

export default class ChatBar extends Component {
	onKeyPress = (ev) => {
	    if (ev.key === "Enter") {
	      this.props.handleMessage(ev.target.value)
	      ev.target.value = ""
	    }
	 }

	render(props) {
	    return (
	        <footer className="chatbar">
		  		<input className="chatbar-username" placeholder="Your Name (Optional)" />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.onKeyPress}/>
                
	    	</footer>
	    );
	}
}
