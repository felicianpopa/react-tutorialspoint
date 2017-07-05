import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }

   render() {
      return (
         <div>
            <Header headerProp= {this.state.header} /> {/* this gets the data from the state*/}
        	<Header headerProp= "this data is added from a string"/>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}

// This class uses props
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.headerProp}</h1>
			</div>
		);
	}
}

export default App;