import React from "react";
import styled from "styled-components";
import { GitContext } from "../Context/context";
import { UserCardWrapper } from "../Wrappers";
import { MdMyLocation, MdEmail } from "react-icons/md";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";

const ProfileCard = () => {
  const { githubUser } = React.useContext(GitContext);
  const {
    avatar_url,
    html_url,
    name,
    blog,
    email,
    bio,
    location,
    twitter_username,
    login,
  } = githubUser;
  return (
    <UserCardWrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{login}</p>
        </div>
        <a target="_blank" href={html_url}>
          Follow
        </a>
      </header>
      <div className="profile-info"></div>
      <div className="links">
        <div>
        <p>
          <MdMyLocation></MdMyLocation> {location}
        </p>
        <p>
          <MdEmail></MdEmail> {email}
        </p>
        </div>
        <div>
        <p>
          <BsLink45Deg></BsLink45Deg>
          <a target="_blank" href="http://aaron-rodi.netlify.app/">
            {blog}
          </a>
        </p>
        <p>
          <BsTwitter></BsTwitter>@{twitter_username}
        </p>
        </div>
      </div>
    </UserCardWrapper>
  );
};

export default ProfileCard;
