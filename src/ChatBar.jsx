import React, {Component} from 'react';

export default class ChatBar extends Component {
	render() {
	    return (
	        <footer className="chatbar">
	    
		  		<input className="chatbar-username" placeholder="{props.username}" />
		  		<input className="chatbar-message" placeholder="{props.content}" />
	    	</footer>
	    );
	}
}
