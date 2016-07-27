
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
  import UserList from './UserList.jsx';
  import NoMatch from './NoMatch.jsx';
  import Welcome from './Welcome.jsx';
  import User from './User.jsx';

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
          {this.props.children}
        </div>
      );
    }
  }
  /*
    (html5 push state) browserHistory: localhost:3000/users
    old: hashHistory or empty:  localhost:3000/#/users?asasda
  */
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="users" component={UserList}>
          <Route path="/user/:userId" component={User}/>
        </Route>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  );
