import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_USERS ='ADD_USERS';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

export function addUsers(text) {
  return {
    type: ADD_USERS,
    text: text
  }
}

export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  }
}
