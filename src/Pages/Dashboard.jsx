import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register the required components
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Data for Sales vs Orders Line Chart
  const lineData = {
    labels: ['6/30/2024 - 6/06/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Sales',
        data: [1,0.6,0.3],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        yAxisID: 'y2',
      },
      {
        label: 'Orders',
        data: [2,1,1], // Adjusted orders data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        yAxisID: 'y',
      },
    ],
  };

  // Options for Line Chart
  const lineOptions = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date Range',
        },
      },
      y2: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value (k)',
        },
        ticks: {
          callback: function(value) {
            return value + 'k';
          },
          min: 0,
          max: 1.6,
          stepSize: 0.4,
        },
        // position:left,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value ',
        },
        ticks: {
          callback: function(value) {
            return value;
          },
          min: 0,
          max: 6,
          stepSize: 1,
        },
        position: 'right',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  // Data for Sales Distribution Pie Chart
  const pieData = {
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['rgb(250, 126, 126)', 'rgb(44, 222, 213)'],
      },
    ],
    labels: ['WooCommerce', 'Shopify'],
  };

  // Options for Pie Chart
  const pieOptions = {
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      datalabels: {
        formatter: function(value, context) {
          let percentage = (value / (pieData.datasets[0].data[0] + pieData.datasets[0].data[1])) * 100;
          return `${value} (${percentage.toFixed(2)}%)`;
        },
        color: 'white',
        font: {
          weight: 'bold',
          size: 14,
        },
      }
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: '-10px', width: '60%', height: '300px', marginRight: '10px' }}>
        <h2>Sales vs Orders</h2>
        <Line data={lineData} options={lineOptions} />
      </div>
      <div style={{ width: '40%' }}>
        <h2>Portion of Sales</h2>
        <Pie data={pieData} options={pieOptions} />
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {pieData.labels.map((label, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{
                width: '15px',
                height: '15px',
                backgroundColor: pieData.datasets[0].backgroundColor[index],
                display: 'inline-block',
                marginRight: '5px'
              }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
