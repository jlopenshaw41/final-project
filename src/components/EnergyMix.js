import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import styled from "styled-components";

const Chartcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 70vh;
  width: 90vw;
  margin-bottom: 200px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const LastUpdated = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.8rem;

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    width: 80vw;
  }
`;

const StyledPara = styled.p`
  margin: 20px 0px 0px 0px;
`;

const CreditText = styled.h3`
  margin: 20px;
  font-weight: 300;

@media only screen and (max-width: 750px) {
    font-size: 0.7rem;
  }
`;

const EnergyMix = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    axios
      .get("https://api.reactive.energy/energy-mix")
      .then((res) => {
        const dataObj = res.data;
        const arrayObj = Object.entries(dataObj);

        let timeStamp = arrayObj[0][1].lastUpdate.utc;
        document.getElementById("time").innerHTML = timeStamp;

        const mergedArrayObj = [].concat.apply([], arrayObj);

        let typeData = [];
        for (let i = 2; i < mergedArrayObj.length; i += 2) {
          typeData.push(mergedArrayObj[i]);
        }

        let proportion = mergedArrayObj.map((energy) => energy.proportion);
        const proportionData = proportion.filter(
          (proportion) => proportion >= 0
        );

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
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Main>
      <LastUpdated>
        <StyledPara>Last updated: </StyledPara>
        <StyledPara id="time"></StyledPara>
      </LastUpdated>
      <CreditText>
        Data provided by{" "}
        <a href="https://www.reactive.energy/">Reactive Energy </a>
      </CreditText>
      <Chartcontainer>
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              position: "left",
              align: "center",
              labels: {
                fontColor: "black",
                fontSize: 20,
                fontFamily: "Montserrat",
                padding: 10,
              },
            },
          }}
        />
      </Chartcontainer>
    </Main>
  );
};

export default EnergyMix;
