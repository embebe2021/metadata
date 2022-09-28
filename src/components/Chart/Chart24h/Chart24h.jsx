import React from "react";
import ApexCharts from "apexcharts";
import getData24h from "./getData24h";

const categories = ["Dự án", "Đơn vị", "Văn bản", "Dữ liệu"];
getData24h();
class Chart24h extends React.Component {
  constructor(props) {
    super(props);
    this.chartDiv = React.createRef();
  }
  componentDidMount() {
    const options = {
      series: [],
      // series: [
      //   {
      //     name: "",
      //     data: [400, 470, 800, 1380],
      //   },
      // ],
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
        text: "24h qua:",
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
      chart: {
        type: "bar",
        height: 310,
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
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,
        labels: {
          show: true,
          rotate: 0,
          style: {
            // colors: ["#E4E6EB"],
            colors: "#E4E6EB",
            // fontSize: "1.2rem",
            // fontFamily: "'Darker Grotesque', sans-serif",
            // fontWeight: 400,
            // cssClass: "apexcharts-xaxis-label",
          },
        },
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
            fontWeight: 400,
            // cssClass: "apexcharts-yaxis-label",
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
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
            return `${value} ${categories[dataPointIndex]}`;
          },
        },
      },
    };
    const chart = new ApexCharts(this.chartDiv.current, options);
    chart.render();
    this.chart = chart;
  }
  componentDidUpdate(prevProps, prevState) {
    const seriesData = this.props.data;

    if (prevProps !== this.props && seriesData[0].data.length > 0) {
      this.chart.updateOptions({
        series: seriesData,
      });
    }
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <>
        <div id="chart24h" ref={this.chartDiv}></div>
      </>
    );
  }
}
export default Chart24h;
