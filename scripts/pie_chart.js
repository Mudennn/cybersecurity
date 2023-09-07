// VAPT CHART
var data = {
  labels: ["Completed", "Failed", "Not Yet Start", "Passed", "Started"],
  datasets: [
    {
      data: [30, 20, 15, 10, 25],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2", "#FDD07A"],
      borderWidth: [0,0,0,0,0]
    },
  ],
};

var ctx = document.getElementById("vapt-chart").getContext("2d");
var myVaptChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        labels : {
            usePointStyle: true,
            boxWidth: 20,
        },
        display: true,
        position: "bottom",
      },
      datalabels: {
        align: "end",
        anchor: "end",
        font: {
          size: 14,
        },
        formatter: (value, ctx) => {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var percent =
            (
              (value * 100) /
              ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
            ).toFixed(1) + "%";
          return label + ": " + percent;
        },
      },
    },
  },
});

// CMERP CHART
var data = {
  labels: ["Completed", "Not Yes Start", "Passed", "Started"],
  datasets: [
    {
      data: [10, 30, 10, 35],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2"],
      borderWidth: [0,0,0,0,0]
    },
  ],
};

var ctx = document.getElementById("cmerp-chart").getContext("2d");
var myCmerpChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        labels : {
            usePointStyle: true,
            boxWidth: 20,
        },
        display: true,
        position: "bottom",
      },
      datalabels: {
        align: "end",
        anchor: "end",
        font: {
          size: 14,
        },
        formatter: (value, ctx) => {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var percent =
            (
              (value * 100) /
              ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
            ).toFixed(1) + "%";
          return label + ": " + percent;
        },
      },
    },
  },
});

// ISGRIC CHART
var data = {
  labels: ["2.5", "Completed", "In Progress", "Not Yet Start", "Passed", "Started"],
  datasets: [
    {
      data: [30, 20, 20, 10, 20, 15],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2", "#FDD07A", "#F8629B"],
      borderWidth: [0,0,0,0,0,0]
    },
  ],
};

var ctx = document.getElementById("isgric-chart").getContext("2d");
var myIsgricChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        labels : {
            usePointStyle: true,
            boxWidth: 20,
        },
        display: true,
        position: "bottom",
      },
      datalabels: {
        align: "end",
        anchor: "end",
        font: {
          size: 14,
        },
        formatter: (value, ctx) => {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var percent =
            (
              (value * 100) /
              ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
            ).toFixed(1) + "%";
          return label + ": " + percent;
        },
      },
    },
  },
});

// TRAINING CHART
var data = {
  labels: ["Completed", "In Progress", "Not Yet Start", "Passed"],
  datasets: [
    {
      data: [30, 20, 15, 35],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2"],
      borderWidth: [0,0,0,0]
    },
  ],
};

var ctx = document.getElementById("training-chart").getContext("2d");
var myTrainingChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        labels : {
            usePointStyle: true,
            boxWidth: 20,
        },
        display: true,
        position: "bottom",
      },
      datalabels: {
        align: "end",
        anchor: "end",
        font: {
          size: 14,
        },
        formatter: (value, ctx) => {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var percent =
            (
              (value * 100) /
              ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
            ).toFixed(1) + "%";
          return label + ": " + percent;
        },
      },
    },
  },
});

// AWARENESS CHART
var data = {
  labels: ["Completed", "In Progress", "Passed", "Started"],
  datasets: [
    {
      data: [30, 20, 15, 35],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2"],
      borderWidth: [0,0,0,0]
    },
  ],
};

var ctx = document.getElementById("awareness-chart").getContext("2d");
var myAwarenessChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        labels : {
            usePointStyle: true,
            boxWidth: 20,
        },
        display: true,
        position: "bottom",
      },
      datalabels: {
        align: "end",
        anchor: "end",
        font: {
          size: 14,
        },
        formatter: (value, ctx) => {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var percent =
            (
              (value * 100) /
              ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
            ).toFixed(1) + "%";
          return label + ": " + percent;
        },
      },
    },
  },
});
