import React from 'react';
import { RepoStatsWrapper } from '../Wrappers';
import { GitContext } from '../Context/context';

const RepoStats = () => {
    const { githubRepos } = React.useContext(GitContext);
    console.log(githubRepos);
  return (
    <RepoStatsWrapper>
        
    </RepoStatsWrapper>
  )
}

export default RepoStats