import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: []
		}

		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	}

	setStateHandler() {
		var item = "setState ... ";
		var myArray = this.state.data;
		myArray.push(item);
		this.setState({data: myArray})
	}

	forceUpdateHandler() {
		this.forceUpdate();
	}

	findDomNodeHandler() {
		var myDiv = document.getElementById('myDiv');
		ReactDom.findDOMNode(myDiv).style.color = 'green';
	}

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>set state</button>
				<h4>State array: {this.state.data}</h4>

				<button onClick={this.forceUpdateHandler}>force update</button>
				<h4>Random number: {Math.random()}</h4>

				<button onClick={this.findDomNodeHandler}>find dom node</button>
				<div id="myDiv">Node</div>
			</div>
		);
	}
}

export default App;