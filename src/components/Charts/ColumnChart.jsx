// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column3d from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column3d, CandyTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const ColumnChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Top 5 Starred Repos",
        subcaption: "Displays top 5 Repositories based on the number of stars received",
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        XaxisFontSize: '16px',
        YaxisFontSize: '16px',
        theme: "candy",
        showBorder: 0,
        decimals: 0,
        showPercentValues: 0,
        
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ColumnChartComponent;