import React from 'react';
import Comment from './CommentContainer';

export default class CommentsList extends React.PureComponent {
  state = {
    newComment: ''
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        </ul>
        <input
          onChange={(e) => this.setState({newComment: e.target.value})}
          value={this.state.newComment}
        />
        <button
          onClick={() => {
            this.setState({newComment: ''});
            this.props.addComment(this.state.newComment);
          }}
        >
          Add comment
        </button>
      </div>
    );
  }
}
