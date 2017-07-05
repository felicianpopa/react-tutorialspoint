import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: []
		}

		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
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

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>set state</button>
				<h4>State array: {this.state.data}</h4>

				<button onClick={this.forceUpdateHandler}>force update</button>
				<h4>Random number: {Math.random()}</h4>
			</div>
		);
	}
}

export default App;