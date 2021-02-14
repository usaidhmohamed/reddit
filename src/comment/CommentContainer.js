import React,  { Component } from 'react';
import Comment from './components/comment/Comment';
import Message from './../common/components/message/Message';

export default class CommentContainer extends Component {

  vote = this.vote.bind(this);
  onUpvote = this.onUpvote.bind(this, this.vote);
  onDownvote = this.onDownvote.bind(this, this.vote);

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("http://localhost:3004/posts/"+ this.props.match.params.id)
      .then(res => res.json())
      .then(message => {
          this.setState({
            message
          });
        }
      )
      .then(() => fetch("http://localhost:3004/users"))
      .then(res => res.json())
      .then(users => {
          this.setState({
            users
          });
        }
      )
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      })
      .finally(() => {
        this.setState({
          isLoaded: true
        });
      });
  }

  vote(indexArr, val) {
    var data = this.state.data;
    var comments = data;
    for (let index of indexArr) {
      var comment = comments[index];
      comments = comment.comments;
    }

    if (comment) {
      if (comment.optimisticUpdate && (comment.optimisticUpdate === val)) {
        comment.optimisticUpdate = 0
      } else {
        comment.optimisticUpdate = val
      }
    }
    this.setState({ data })
  }

  onUpvote(vote, indexArr) {
    vote(indexArr, 1)
  }

  onDownvote(vote, indexArr) {
    vote(indexArr, -1)
  }

  render() {
    return (
      <div>
        <div className="post-section">
          { this.state.isLoaded && (<Message
            key={this.state.message.id}
            users={this.state.users}
            user={this.state.message.user}
            createdAt={this.state.message.createdAt}
            image={this.state.message.image}
            post={this.state.message.post}
          />) }
        </div>
        <div className="comment-section">
          {
            this.state.isLoaded && this.state.message.data.map((comment, index) =>
              <Comment
                key={comment.id}
                comment={comment}
                users={this.state.users}
                onUpvote={this.onUpvote}
                onDownvote={this.onDownvote}
                indexArr={[index]}
              />
            )
          }
        </div>
      </div>
    );
  }
  
}