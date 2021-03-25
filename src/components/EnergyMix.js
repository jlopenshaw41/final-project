import React from "react";
import Chart from "react-google-charts";
// import axios from "axios";


const data = [
  ["Wind", "Hours per Day"],
  ["Solar", 11],
  ["Biomass", 2],
  ["Hydro", 2],
  ["Nuclear", 2],
  ["Fossil", 7], // CSS-style declaration
];
const options = {
  title: "Energy Mix",
  pieHole: 0.4,
  is3D: false,
};
class EnergyMix extends React.Component {
      
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default EnergyMix;