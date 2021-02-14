import React,  { Component } from 'react';

export default class Votecol extends Component {
  onUpvote = this.onUpvote.bind(this);
  onDownvote = this.onDownvote.bind(this);

  onUpvote() {
    this.props.onUpvote(this.props.indexArr)
  }

  onDownvote() {
    this.props.onDownvote(this.props.indexArr)
  }

  render() {
    return (
      <div className="voteCol noselect">
        <div className={this.props.optimisticUpdate === 1 ? 'upvote active' : 'upvote'} onClick={this.onUpvote}>▲</div>
        <div className="smallType">{this.props.points}</div>
        <div className={this.props.optimisticUpdate === -1 ? 'downvote active' : 'downvote'} onClick={this.onDownvote}>▼</div>
      </div>
    );
  }
}
