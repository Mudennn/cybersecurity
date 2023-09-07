// HORIZONTAL CHART
var data = {
    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
    datasets: [
        {
            label: 'Actual',
            data: [25, 30, 15, 45, 20],
            backgroundColor: '#376DF5',
            borderWidth: [0, 0, 0, 0, 0], 
        },
        {
            label: 'Quota',
            data: [40, 15, 30, 10, 35],
            backgroundColor: '#64DFDF', 
            borderWidth: [0, 0, 0, 0, 0],
        }
    ]
};

var ctx = document.getElementById("hori-chart").getContext("2d");
var myHoriChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
            usePointStyle: true,
            boxWidth: 20,
          },
        display: true,
        position: "bottom",
      },
      title: {
        display: false,
      }
    },
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false,
            },
            
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    }
  },
});

// VERTICAL CHART
var data = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
    datasets: [
        {
            label: 'Awaiting LOO Signoff',
            data: [25, 30, 15, 45, 20],
            backgroundColor: "#376DF5",
            borderWidth: [0, 0, 0, 0, 0],
            barPercentage: 0.2,
            categoryPercentage: 0.8,
        },
        {
            label: 'Good',
            data: [40, 15, 30, 10, 35],
            backgroundColor:  "#64DFDF",
            borderWidth: [0, 0, 0, 0, 0],
            barPercentage: 0.2,
            categoryPercentage: 0.8,
        },
        {
            label: 'In-programme',
            data: [10, 20, 10, 30, 15],
            backgroundColor: "#F68769",
            borderWidth: [0, 0, 0, 0, 0],
            barPercentage: 0.2,
            categoryPercentage: 0.8,
        },
        {
            label: 'Not interested',
            data: [15, 25, 20, 10, 30],
            backgroundColor: "#C161E2",
            borderWidth: [0, 0, 0, 0, 0],
            barPercentage: 0.2,
            categoryPercentage: 0.8,
        }
    ]
};

var ctx = document.getElementById("verti-chart").getContext("2d");
var myVertiChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
            usePointStyle: true,
            boxWidth: 20,
          },
        display: true,
        position: "bottom",
      },
      title: {
        display: false,
      }
    },
    scales: { 
        x: {
            ticks: {
                display: false
           },
            grid: {
                display: false,
                drawBorder: true,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    }
  },
});


// VAPT CHART
var data = {
  labels: ["Completed", "Failed", "Not Yet Start", "Passed", "Started"],
  datasets: [
    {
      data: [30, 20, 15, 10, 25],
      backgroundColor: ["#376DF5", "#64DFDF", "#F68769", "#C161E2", "#FDD07A"],
      borderWidth: [0, 0, 0, 0, 0],
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
        labels: {
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
      borderWidth: [0, 0, 0, 0, 0],
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
        labels: {
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
  labels: [
    "2.5",
    "Completed",
    "In Progress",
    "Not Yet Start",
    "Passed",
    "Started",
  ],
  datasets: [
    {
      data: [30, 20, 20, 10, 20, 15],
      backgroundColor: [
        "#376DF5",
        "#64DFDF",
        "#F68769",
        "#C161E2",
        "#FDD07A",
        "#F8629B",
      ],
      borderWidth: [0, 0, 0, 0, 0, 0],
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
        labels: {
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
      borderWidth: [0, 0, 0, 0],
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
        labels: {
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
      borderWidth: [0, 0, 0, 0],
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
        labels: {
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
