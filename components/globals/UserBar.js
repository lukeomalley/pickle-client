import React from 'react';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';

const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${setRem(8)};

  img {
    width: ${setRem(30)};
    height: ${setRem(30)};
    border-radius: 50%;
  }

  p {
    justify-self: start;
    margin-left: ${setRem(16)};
  }
`;

const UserBar = ({ user }) => {
  return (
    <UserBarWrapper>
      <img src={user.imgUrl} alt={user.name} />
      <div>
        <p>{user.username}</p>
      </div>
    </UserBarWrapper>
  );
};

export default UserBar;
