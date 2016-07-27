import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        <h4>I am a user and my id is {this.props.params.userId}</h4>
      </div>
    );
  }
}
