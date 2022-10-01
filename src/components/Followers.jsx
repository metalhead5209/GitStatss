import React from "react";
import { GitContext } from "../Context/context";
import styled from "styled-components";
import { FollowersWrapper } from "../Wrappers";

const Followers = () => {
  const { githubFollowers } = React.useContext(GitContext);
  return (
    <FollowersWrapper>
      <div className="followers">
        {githubFollowers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a target="_blank" href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </FollowersWrapper>
  );
};

export default Followers;
