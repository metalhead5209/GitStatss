import React, { useState, useEffect } from "react";
import axios from "axios";
import MockUser from './mockData.jsx/mockUser';
import MockFollowrs from './mockData.jsx/mockFollowers';
import MockRepos from './mockData.jsx/mockRepos';

const rootUrl = 'https://api.github';

const GitContext = React.createContext();

const GitProvider = ({ children }) => {
    return (
        <GitContext.Provider value={'Heller'}>{children}</GitContext.Provider>
    );
};

export { GitProvider, GitContext };