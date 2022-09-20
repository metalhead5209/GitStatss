import React from 'react';
import styled from 'styled-components';
import { UserWrapper } from '../Wrappers';
import ProfileCard from './ProfileCard';
import Followers from './Followers';

const User = () => {
  return (
    <section className="global-section">
        <UserWrapper className='global-sec-center'>
            <ProfileCard />
            <Followers />
        </UserWrapper>
    </section>
  )
}

export default User