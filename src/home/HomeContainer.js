import React,  { Component } from 'react';
import Message from '../common/components/message/Message';
import { Link } from 'react-router-dom';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("http://localhost:3004/posts")
      .then(res => res.json())
      .then(data => {
          this.setState({
            data
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

  render() {
    return (
      <div>
        {
          this.state.isLoaded && this.state.data.map((message) =>
            <div className="post-section">
              <Message
                key={message.id}
                users={this.state.users}
                user={message.user}
                createdAt={message.createdAt}
                image={message.image}
                post={message.post}
              />
              <Link className="comment-link" to={`/comment/${message.id}`}>comments</Link>
              <hr/>
            </div>
          )
        }
      </div>
    );
  }
}