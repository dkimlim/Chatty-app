import React, {Component} from 'react';

export default class Nav extends Component {
	render() {
	return (
		<nav className="navbar">
		      <a href="/" className="navbar-brand">Chatty</a>
		      <span className="userCount">{this.props.connectedUsers} user(s) online</span>
		</nav>
	)}
}