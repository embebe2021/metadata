import ApexCharts from "apexcharts";
const dataTitlesSample = ["Dự án", "Đơn vị", "Văn bản", "Dữ liệu"];

function initChart(data, node1, node2, node3) {
  var optionsChart1 = {
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
    series: data,
    // series: [],
    noData: {
      text: "Loading...",
      align: "center",
      verticalAlign: "bottom",
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        fontFamily: "'Darker Grotesque', sans-serif",
        color: "#E4E6EB",
      },
    },
    title: {
      text: "7 ngày gần nhất:",
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
      categories: [
        "11/01/2019",
        "12/01/2019",
        "13/01/2019",
        "14/01/2019",
        "15/01/2019",
        "16/01/2019",
        "17/01/2019",
      ],
      // position: "bottom",
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
      y: {
        formatter: function (
          value,
          { series, seriesIndex, dataPointIndex, w }
        ) {
          return `${value} ${dataTitlesSample[seriesIndex]}`;
        },
      },
    },
  };
  const chart1 = new ApexCharts(node1, optionsChart1);
  chart1.render();

  var optionsChart2 = {
    series: [
      {
        name: "",
        data: [400, 470, 800, 1380],
      },
    ],
    title: {
      text: "24h vừa qua:",
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
      categories: ["Dự án", "Đơn vị", "Văn bản", "Dữ liệu"],
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
      y: {
        formatter: function (
          value,
          { series, seriesIndex, dataPointIndex, w }
        ) {
          return `${value} ${dataTitlesSample[dataPointIndex]}`;
        },
      },
    },
  };
  var chart2 = new ApexCharts(node2, optionsChart2);
  chart2.render();

  var optionsChar3 = {
    series: [44, 55, 41, 17],
    title: {
      text: "Tổng cộng:",
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
    labels: ["Dự án", "Đơn vị", "Văn bản", "Dữ liệu"],
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
  const chart3 = new ApexCharts(node3, optionsChar3);
  chart3.render();

  return chart1;
}

export default initChart;
