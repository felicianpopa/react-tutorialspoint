import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
	      <div>
	      	<Header />
	    	<Main />
	      </div>
      </BrowserRouter>
    )
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

const Header = () => (
	<div>
        <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
        </ul>
     </div>
)

const About = () => (
  <div>
    <h1>About</h1>
  </div>
)
const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
)

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
)

export default App;