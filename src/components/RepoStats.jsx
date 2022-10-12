import React from 'react';
import { RepoStatsWrapper } from '../Wrappers';
import { GitContext } from '../Context/context';
import { ExampleChart } from './Charts';

const RepoStats = () => {
    const { githubRepos } = React.useContext(GitContext);
    console.log(githubRepos);
  return (
    <RepoStatsWrapper className='global-section'>
        <ExampleChart />
    </RepoStatsWrapper>
  )
}

export default RepoStats