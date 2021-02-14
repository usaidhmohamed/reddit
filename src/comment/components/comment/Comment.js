import React,  { Component } from 'react';
import VoteCol from '../../../common/components/voteCol/VoteCol';
import UserService from "../../../common/services/UserService";
import TimeService from "../../../common/services/TimeService";

export default class Comment extends Component {

  userLookup(id) {
    return UserService.userLookup(id, this.props.users);
  } 

  elapsedTime() {
    var createdAt = new Date(this.props.comment.createdAt);
    return TimeService.elapsedTime(createdAt);
  }

  render() {

    var optimisticUpdate = this.props.comment.optimisticUpdate ? this.props.comment.optimisticUpdate : 0;

    return (
    	<div  className="comment">
        <div className="flex">
    	    <div>
    	    	<a className="username smallType">{this.userLookup(this.props.comment.user)}</a>
            <span className="smallType">{this.elapsedTime()} ago</span>
    	    	<div>{this.props.comment.text}</div>
    	    </div>
        </div>
        <VoteCol 
            optimisticUpdate={optimisticUpdate}
            onUpvote={this.props.onUpvote}
            points={this.props.comment.points + optimisticUpdate}
            onDownvote={this.props.onDownvote}
            indexArr={this.props.indexArr}
          />
  	    {
          this.props.comment.comments.map((comment, index) =>
            <Comment
              key={comment.id}
              comment={comment}
              users={this.props.users}
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}
              indexArr={this.props.indexArr.slice().concat(index)}
            />
          )
        }
      </div>
    );
  }
}