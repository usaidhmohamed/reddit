import React,  { Component } from 'react';
import UserService from "./../../services/UserService";
import TimeService from "./../../services/TimeService";

export default class Message extends Component {
  userLookup(id) {
    return UserService.userLookup(id, this.props.users);
  }

  elapsedTime() {
    var createdAt = new Date(this.props.createdAt);
    return TimeService.elapsedTime(createdAt);
  }

  render() {
    return (
      <div>
        <a className="username smallType">{this.userLookup(this.props.user)}</a>
        <span className="smallType">{this.elapsedTime()} ago</span>
        <div>{this.props.post}</div>
        {this.props.image && <img src={this.props.image} alt="alter"></img>}
      </div>
    );
  }
}
