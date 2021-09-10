import React, { Component } from 'react';
import faker from 'faker';
import store from './store';

import './App.css';
// arrow functions
import EmailComponent from './Email';
import EmailList from './EmailList';
import Login from './Login';

// the mock data has fake email ids just for fun.
const inboxEmails = [1, 2, 3, 4, 5].map(n => ({
  from: faker.internet.email(),
  to: 'me',
  subject: `subject ${n}`,
  message: `message ${n}`,
}));

const sentEmails = [1, 2, 3, 4, 5].map(n => ({
  from: 'me',
  to: faker.internet.email(),
  subject: `subject ${n}`,
  message: `message ${n}`,
}));

class App extends Component {
  state = {
    loggedIn: false,
    tab: 'inbox'
  }
  // no called App()
  constructor() {
    super();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  handleLogin = () => {
    store.dispatch({ type: 'LOGIN_COMPLETED' });
  }

  handleLogout = () => {
    store.dispatch({ type: 'LOGOUT_COMPLETED' });
  }

  render() {
    return store.getState().loggedIn ?
      <div>
        <a href="#" onClick={() => this.setState({ tab: 'inbox' })}>Inbox </a>
        <a href="#" onClick={() => this.setState({ tab: 'sent' })}>Sent </a>
        <a href="#" onClick={this.handleLogout} className="logout">
          Logout
        </a>
        {this.state.tab === 'inbox' && <EmailList emails={inboxEmails} />}
        {this.state.tab === 'sent' && <EmailList emails={sentEmails} />}
      </div> :
      <Login onLogin={this.handleLogin} />
  }
}

export default App;
