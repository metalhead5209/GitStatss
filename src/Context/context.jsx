import React, { useState, useEffect } from "react";
import axios from "axios";
import staticUser from "./staticData/staticUser";
import staticFollowers from "./staticData/staticFollowers";
import staticRepos from "./staticData/staticRepos";

const rootUrl = "https://api.github.com";

const GitContext = React.createContext();

const GitProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(staticUser);
  const [githubFollowers, setGithubFollowers] = useState(staticFollowers);
  const [githubRepos, setGithubRepos] = useState(staticRepos);
    // Load request
    const [ loading, setLoading] = useState(false);
    const [ error, setError ] = useState({show:false, msg:""});
  
    // Searc Github user
    const searchGitUser = async(user) => {
      errMessage();
      const res = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err));
      console.log(res);
      if (res) {
        setGithubUser(res.data)
      }
      else {
        errMessage(true, "There is no user with that name");
      }
    };

    const errMessage = (show = false, msg = "") => {
      setError({show, msg});
    };



    // Error Handling
    useEffect(() => {
      console.log('App Loaded')
    }, []);
 
   
  return (
    <GitContext.Provider value={{
      githubUser,
      githubFollowers, 
      githubRepos, 
      searchGitUser,
      error,
      loading 
      }}>
      {children}
    </GitContext.Provider>
  );
};

export { GitProvider, GitContext };
