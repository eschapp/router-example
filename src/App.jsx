
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, Link } from 'react-router';
  import UserList from './UserList.jsx';
  import NoMatch from './NoMatch.jsx';

  /**
   * A stateful component to store our app
   */
  class App extends Component {
    render() {
      return (
        <div>
          <ul>
            <li><Link to={`/users`}>User List</Link></li>
          </ul>
          <h1>Welcome</h1>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
      <Route path="/users" component={UserList} />
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  );
