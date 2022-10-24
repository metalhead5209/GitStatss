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
  const mostPopularLanguage = Object.values(mostUsedLanguages)
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
    }).slice(0,5);
    
    // Stars, Forks per Repo

    let { stars, forks } = githubRepos.reduce(
      (total, item) => {
        const { stargazers_count, name, forks } = item;
        total.stars[stargazers_count] = { label: name, value: stargazers_count };
        total.forks[forks] = { label: name, value: forks};
        return total;
      },
      {
        stars: {},
        forks: {},
      }
    );

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();

    
  return (
    <>
    <RepoStatsWrapper className="global-section">
      <PieChart data={mostPopularLanguage} />
      <ColumnChart data={stars} />
    </RepoStatsWrapper>
    <RepoStatsWrapperB className="global-section">
      <BarChart data={forks} />
      <DonutChart data={mostStars} />
    </RepoStatsWrapperB>
    </>
    
  );
};

export default RepoStats;
