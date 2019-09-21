import React from 'react';
import styled from 'styled-components';
import { setRem } from '../../lib/styles';
import Comment from './Comment';

const PickleCommentsWrapper = styled.div`
  background: ${props => props.theme.mainWhite};
  margin-left: ${setRem(3)};
  margin-bottom: ${setRem(8)};
`;

const PickleComments = ({ comments }) => {
  return (
    <PickleCommentsWrapper>
      {comments.length === 0
        ? null
        : comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </PickleCommentsWrapper>
  );
};

export default PickleComments;
