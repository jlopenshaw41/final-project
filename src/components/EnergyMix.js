import React, { useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import styled from "styled-components";

const Chartcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
`;


const EnergyMix = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    axios
      .get("https://api.reactive.energy/energy-mix")
      .then(res => {
        const dataObj = res.data
        const arrayObj = Object.entries(dataObj)
        
        let timeStamp = arrayObj[0][1].lastUpdate.utc
        document.getElementById('time').innerHTML = timeStamp;

        const mergedArrayObj = [].concat.apply([], arrayObj)
        
        let typeData = []
        for (let i = 2; i < mergedArrayObj.length; i += 2) {
          typeData.push(mergedArrayObj[i])
        }

        let proportion = mergedArrayObj.map((energy) => energy.proportion)
        const proportionData = proportion.filter(proportion => proportion >= 0)

      setChartData({
        labels: typeData,
        datasets: [
          {
            label: "Energy Proportion",
            data: proportionData,
            backgroundColor: [
              "#36AB9C",
              "#C589E8",
              "#742262",
              "#E3DAFF",
              "#214F4B",
              "#3423A6",
            ],
            borderWidth: 1,
            borderColor: "black",
          }
        ]
      });
    })
      .catch(err => {
        console.log(err)
      })
    }

  useEffect(() => {
    chart()
  }, [])
  
  return (
      <Chartcontainer>
          <h2>Energy Mix @ </h2>
          <p id="time"></p>
          <h3>Data provided by <a href="https://www.reactive.energy/">Reactive Energy </a></h3>
          <Doughnut data={chartData} options= {{
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                  display: true,
                  position: "left",
                  labels: {
                    fontColor: "black",
                    fontSize: 25,
                    fontFamily: 'Amatic SC',
                    fontStyle: "bold",
                  }
              }
          }}/>
      </Chartcontainer>
  )
}

export default EnergyMix;