// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Donut3d from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Donut3d, CandyTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const DonutChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Top 5 Starred Languages",
        subcaption: "Displays top 5 languagues based on the number of stars received.",
        theme: "candy",
        showBorder: 0,
        decimals: 0,
        doughnutRadius: '60%',
        showPercentValues: 0,
        
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default DonutChartComponent;
