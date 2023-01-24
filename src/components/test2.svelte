<script>
	let name = 'worl';
</script>

<input bind:value={name}>

<h1>Hello {name}!</h1>


<!-- import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class Topics extends Component {
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.props.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

class Topic extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    );
  }
}

export default App;



function Conversations(props) {
	const [conversations, setConversations] = useState([]);
	const [currentConversation, setCurrentConversation] = useState(null);
  
	const handleClick = (conversation) => {
	  setCurrentConversation(conversation);
	};
  
	return (
	  <div>
		<div className="sidebar">
		  <h2>Conversations</h2>
		  <ul>
			{conversations.map((conversation) => (
			  <li key={conversation.id} onClick={() => handleClick(conversation)}>
				{conversation.title}
			  </li>
			))}
		  </ul>
		</div>
		<div className="main">
		  <h2>{currentConversation.title}</h2>
		  <ul>
			{currentConversation.messages.map((message) => (
			  <li key={message.id}>{message.text}</li>
			))}
		  </ul>
		  <form>
			<input type="text" />
			<button type="submit">Submit</button>
		  </form>
		</div>
	  </div>
	);
  }
  
  export default Conversations; -->


