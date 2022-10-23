import React from 'react';
import { RepoStatsWrapper } from '../Wrappers';
import { GitContext } from '../Context/context';
import { PieChart } from './Charts';

const RepoStats = () => {
    const { githubRepos } = React.useContext(GitContext);
    console.log(githubRepos);

    const chartData = [
      {
        label: "HTML",
        value: "290"
      },
      {
        label: "CSS",
        value: "260"
      },
      {
        label: "JavsScript",
        value: "180"
      },
      {
        label: "TypeScript",
        value: "140"
      }
    ];

  return (
    <RepoStatsWrapper className='global-section'>
        <PieChart data={chartData} />
        <PieChart data={chartData} />
        <PieChart data={chartData} />
        <PieChart data={chartData} />
    </RepoStatsWrapper>
  )
}

export default RepoStats