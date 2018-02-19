import React, {Component} from 'react';


export default class Message extends Component {
	render() {  
	    return (
	    	<div className="message">
	   	      <span className="message-username">{props.username}</span>
		      <span className="message-content">{props.content}</span>
			</div>
		
    	);
  	}
}
