import React from "react";
import { GitContext } from "../Context/context";
import { UserDataWrapper } from "../Wrappers";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa"; /* followers */
import { MdContacts } from "react-icons/md";

const UserData = () => {
  const { githubUser } = React.useContext(GitContext);
  const { public_repos, followers, following } = githubUser;

  const cards = [
    {
      id: 1,
      icon: <RiGitRepositoryFill className="icon" />,
      label: "Repos",
      value: public_repos,
      color: 'blue',
    },
    {
      id: 2,
      icon: <FaUserFriends className="icon" />,
      label: "Followers",
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <MdContacts className="icon" />,
      label: "Following",
      value: following,
      color: 'purple',
    },
  ];

  const Item = ({icon, label, value, color}) => {
    return <div className="item">
        <span className={color}>{icon}</span>
        <div>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    </div>
  }

  

  return (
    <section className="global-section">
      <UserDataWrapper className="global-sec-center">
        {cards.map((card) => {
            return <Item key={card.id} {...card}></Item>
        })}
      </UserDataWrapper>
    </section>
  );
};

export default UserData;
