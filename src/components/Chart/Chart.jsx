import React from "react";
import { getData } from "../../ultils/callApi";
import API from "../../ultils/API";
import chartStyle from "./Chart.module.css";
import ChartMostRecent from "./ChartMostRecent/ChartMostRecent";
import getDataMostRecent from "./ChartMostRecent/getDataMostRecent";
import Chart24h from "./Chart24h/Chart24h";
import getData24h from "./Chart24h/getData24h";
import ChartTotal from "./ChartTotal/ChartTotal";
import getDataTotal from "./ChartTotal/getDataTotal";

import socket from "../../ultils/socket";

function getRandomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.socket = socket();
    this.state = {
      dataMostRecent: [],
      data24h: [],
      dataTotal: {},
    };
  }
  async componentDidMount() {
    this.socket.on("chart-data", (data) => {
      const dataMostRecent = getDataMostRecent(data.dataMostRecent);
      const data24h = getData24h(data.data24h);
      const dataTotal = getDataTotal(data.dataTotal);
      this.setState({ dataMostRecent, data24h, dataTotal });
    });
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    const { dataMostRecent, data24h, dataTotal } = this.state;
    return (
      <>
        <div className={chartStyle["dashboardBody"]}>
          <div
            className={`${chartStyle["dashboardBody__child"]} ${chartStyle["dashboardBody--top"]}`}
          >
            <h3 className={chartStyle["dashboard--title"]}></h3>
            <ChartMostRecent data={dataMostRecent} />
          </div>
          <div
            className={`${chartStyle["dashboardBody__child"]} ${chartStyle["dashboardBody--bottom"]}`}
          >
            <div className={chartStyle["dashboardBody__childItem"]}>
              <h3 className={chartStyle["dashboard--title"]}></h3>
              <Chart24h data={data24h} />
            </div>

            <div className={chartStyle["dashboardBody__childItem"]}>
              <h3 className={chartStyle["dashboard--title"]}></h3>
              <ChartTotal data={dataTotal} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChartContainer;
