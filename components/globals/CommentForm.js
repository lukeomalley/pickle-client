import React from 'react';
import styled from 'styled-components';

const CommentFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.lightGrey};
  background: ${props => props.theme.mainWhite};

  input[type='text'] {
    border: none;
    font-family: ${props => props.theme.primaryFont};
  }

  button {
    border: none;
  }
`;

const CommentForm = () => {
  return (
    <CommentFormWrapper>
      <input type="text" placeholder="Add a comment" />
      <button type="submit">Post</button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
