import React from "react";
import axios from "axios";

const rootUrl = 'https://api.github';

const GitContext = React.createContext();

const GitProvider = ({ children }) => {
    return (
        <GitContext.Provider value={'Heller'}>{children}</GitContext.Provider>
    );
};

export { GitProvider, GitContext };