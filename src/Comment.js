import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => removeComment(id)}>Remove</button>
  </li>;

export default Comment;
