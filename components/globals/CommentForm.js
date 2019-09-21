import React from 'react';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';

const CommentFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.mainWhite};
  padding: ${setRem(8)};

  input[type='text'] {
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  button {
    border: none;
    background: ${props => props.theme.mainWhite};
    font-size: ${setRem(16)};
    cursor: pointer;
  }
`;

const CommentForm = () => {
  return (
    <CommentFormWrapper>
      <input type="text" placeholder="Add a comment..." />
      <button type="submit">Post</button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
