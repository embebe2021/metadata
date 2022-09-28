import React from "react";
import ApexCharts from "apexcharts";

class ChartTotal extends React.Component {
  constructor(props) {
    super(props);
    this.chartDiv = React.createRef();
  }
  componentDidMount() {
    const options = {
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
        text: "Tổng quan:",
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
      labels: [],
      chart: {
        type: "donut",
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
        // offsetY: 20,
      },
      legend: {
        show: true,
        position: "bottom",
        labels: {
          colors: ["#E4E6EB"],
          useSeriesColors: false,
        },
        itemMargin: {
          horizontal: 10,
          // vertical: 0,
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
        // gradient: {
        //   shade: "dark",
        //   type: "vertical",
        //   shadeIntensity: 0.5,
        //   inverseColors: false,
        //   opacityFrom: 1,
        //   opacityTo: 0.8,
        //   stops: [0, 100],
        // },
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         position: "bottom",
      //       },
      //     },
      //   },
      // ],
    };
    const chart = new ApexCharts(this.chartDiv.current, options);
    chart.render();
    this.chart = chart;
  }
  componentDidUpdate(prevProps, prevState) {
    const { series, labels } = this.props.data;
    if (this.props !== prevProps && this.props.data.series.length > 0) {
      this.chart.updateOptions({
        series,
        labels,
      });
    }
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <>
        <div id="chartTotal" ref={this.chartDiv}></div>
      </>
    );
  }
}
export default ChartTotal;
