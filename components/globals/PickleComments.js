import React from 'react';
import styled from 'styled-components';

const PickleCommentsWrapper
const PickleComments = ({comments}) => {
  return <PickleCommentsWrapper>
    {comments.map(comment => <Comment></Comment>)}
  </PickleCommentsWrapper>;
};

export default PickleComments;
