import React from "react";
import ApexCharts from "apexcharts";
import dataMostRecent from "./getDataMostRecent";

dataMostRecent();
class ChartMostRecent extends React.Component {
  constructor(props) {
    super(props);
    this.chartDiv = React.createRef();
  }
  componentDidMount() {
    const options = {
      chart: {
        type: "bar",
        height: 300,
        toolbar: {
          show: true,
          autoSelected: "zoom",
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
          },
        },
        animations: {
          enabled: true,
          speed: 300,
        },
      },
      series: [],
      noData: {
        text: "Đang tải...",
        align: "center",
        verticalAlign: "bottom",
        offsetX: 0,
        offsetY: -10,
        style: {
          // fontSize: "1.8rem",
          // fontWeight: "bold",
          fontFamily: "'Darker Grotesque', sans-serif",
          color: "#E4E6EB",
        },
      },
      title: {
        text: "Thời gian gần nhất:",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 20,
        floating: false,
        style: {
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontFamily: "'Darker Grotesque', sans-serif",
          color: "#E4E6EB",
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          align: "left",
          maxWidth: 200,
          style: {
            // colors: [],
            colors: "#E4E6EB",
            // fontSize: "1.2rem",
            // fontFamily: "'Darker Grotesque', sans-serif",
            // fontWeight: 400,
            // cssClass: "apexcharts-yaxis-label",
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: "#E4E6EB",
            // fontSize: "1.2rem",
            // fontFamily: "'Darker Grotesque', sans-serif",
            // fontWeight: 400,
            // cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      legend: {
        show: true,
        labels: {
          colors: "#E4E6EB",
          useSeriesColors: false,
        },
        itemMargin: {
          horizontal: 20,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: false,
        },
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w }
          ) {
            let seriesNamesKey = w.config.series.map((item) => item.name);
            return `${value} ${seriesNamesKey[seriesIndex]}`;
          },
        },
      },
    };
    const chart = new ApexCharts(this.chartDiv.current, options);
    chart.render();
    this.chart = chart;
  }
  componentDidUpdate(prevProps, prevState) {
    const { categories, finalSeriesData, seriesNames } = this.props.data;

    if (this.props !== prevProps && finalSeriesData.length > 0) {
      this.chart.updateOptions({
        series: finalSeriesData,
        xaxis: {
          categories,
        },
      });
    }
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <>
        <div id="chartMostRecent" ref={this.chartDiv}></div>
      </>
    );
  }
}
export default ChartMostRecent;
