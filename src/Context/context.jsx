import React, { useState, useEffect } from "react";
import axios from "axios";
import staticUser from './staticData/staticUser';
import staticFollowers from './staticData/staticFollowers';
import staticRepos from './staticData/staticRepos';

const rootUrl = 'https://api.github';

const GitContext = React.createContext();

const GitProvider = ({ children }) => {
    const [ githubUser, setGithubUser ] = useState(staticUser);
    const [ githubFollowers, setGithubFollowers ] = useState(staticFollowers);
    const [ githubRepos, setGithubRepos ] = useState(staticRepos);
    return (
        <GitContext.Provider value={ {githubUser, githubFollowers, githubRepos} }>{children}</GitContext.Provider>
    );
};

export { GitProvider, GitContext };