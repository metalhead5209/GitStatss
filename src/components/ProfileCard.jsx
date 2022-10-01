import React from 'react';
import styled from 'styled-components';
import { GitContext } from '../Context/context';
import { UserCardWrapper } from '../Wrappers';

const ProfileCard = () => {

  const {githubUser} = React.useContext(GitContext);
  const {avatar_url, html_url, name, company, blog, bio, location, twitter_username} = githubUser;
  return (
    <UserCardWrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || ''}</p>
        </div>
        <a target="_blank" href={html_url}>Follow</a>
      </header>
      <div className="profile-info">
      <p className="bio">{bio || 'Github User'}</p>
      </div>
    </UserCardWrapper>
    
  )
}

export default ProfileCard