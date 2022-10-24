import React from "react";
import { RepoStatsWrapper, RepoStatsWrapperB } from "../Wrappers";
import { GitContext } from "../Context/context";
import { PieChart, DonutChart, ColumnChart, BarChart } from "./Charts";

const RepoStats = () => {
  const { githubRepos } = React.useContext(GitContext);

  let mostUsedLanguages = githubRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1,
      stars:stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  const most = Object.values(mostUsedLanguages)
    .sort((top, bottom) => {
      return bottom.value - top.value;
    })
    .slice(0, 5);

    // Stars Per Language

    const mostStars = Object.values(mostUsedLanguages)
      .sort((top, bottom) => {
      return bottom.stars - top.stars;
    }).map((item) => {
      return { ...item, value: item.stars };
    }).slice(0,5) 
    
  return (
    <>
    <RepoStatsWrapper className="global-section">
      <PieChart data={most} />
      <ColumnChart data={most} />
    </RepoStatsWrapper>
    <RepoStatsWrapperB className="global-section">
      <BarChart data={most} />
      <DonutChart data={mostStars} />
    </RepoStatsWrapperB>
    </>
    
  );
};

export default RepoStats;
