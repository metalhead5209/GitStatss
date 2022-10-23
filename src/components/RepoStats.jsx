import React from "react";
import { RepoStatsWrapper } from "../Wrappers";
import { GitContext } from "../Context/context";
import { PieChart } from "./Charts";

const RepoStats = () => {
  const { githubRepos } = React.useContext(GitContext);

  let mostUsedLanguages = githubRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  mostUsedLanguages = Object.values(mostUsedLanguages)
    .sort((top, bottom) => {
      return bottom.value - top.value;
    })
    .slice(0, 5);
  console.log(mostUsedLanguages);

  return (
    <RepoStatsWrapper className="global-section">
      <PieChart data={mostUsedLanguages} />
      <PieChart data={mostUsedLanguages} />
      <PieChart data={mostUsedLanguages} />
      <PieChart data={mostUsedLanguages} />
      
    </RepoStatsWrapper>
  );
};

export default RepoStats;
