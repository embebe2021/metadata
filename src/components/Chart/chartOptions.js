const xaxis = {
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
};
const yaxis = {
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
};
const legend = {
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
};

export { xaxis, yaxis, legend };
