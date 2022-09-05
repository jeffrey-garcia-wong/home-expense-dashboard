import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,  
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement, 
  ArcElement
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import Side from './Side';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement, 
  ArcElement
);

function App() {
  const lineData = {
    labels: ['Jun', 'Jul'],
    datasets: [
      {
        label: 'Fixed expenses',
        data: [2150.84, 2150.84],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Energy expenses',
        data: [347.69, 347.83],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Misc. expenses',
        data: [1432.93, 1028.59],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },      
    ],
  };

  const chartData = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Overall expenses per month',
        data: [3418.1, 3636.56, 3926.63, 3931.46, 3528.26],
        backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const pieData = {
    labels: ['Mortgage', 'Home Insurance', 'Property Management', 
    'Broadband', 'Mobile SIM', 'Security System', 
    'Water Softener', 'Council Tax', 'Pipes Insurance', 
    'Car Insurance', 'Car Road Tax', 'Car MOT'],
    datasets: [
      {
        label: 'Fixed Expenses Breakdown',
        data: [1576.40, 25.16, 15.22, 63, 20, 43, 35.9, 213, 6, 153.16, 135, 13.56, 4.6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 64, 0, 0.2)',
          'rgba(191, 255, 0, 0.2)',
          'rgba(191, 0, 255, 0.2)',
          'rgba(255, 0, 128, 0.2)',
          'rgba(128, 0, 255, 0.2)',
          'rgba(0, 255, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(191, 255, 0, 1)',
          'rgba(191, 0, 255, 1)',
          'rgba(255, 0, 128, 1)',
          'rgba(128, 0, 255, 1)',
          'rgba(0, 255, 255, 1)',
        ],
        borderWidth: 1,        
      }
    ]
  };
  
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Fixed expenses breakdown in GBP (£)',
      },
    },       
  }

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
          beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly overall expenses in GBP (£)',
      },
    },     
  };

  const lineOptions = {
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,    
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly expenses trend in GBP (£)',
      },
    },   
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 100
        }        
      }
    },    
  };  

  return (
    <div>
      <div className="header">
        <h1>UK HOME</h1>
      </div>

      <div className="row">
        <div className="col-3 col-s-3 menu">
          <ul>
            <li>Expenses</li>          
            <li>Investments</li>
            <li>Outstanding</li>
            <li>Tax</li>    
          </ul>
        </div>

        <div className="col-6 col-s-9">
          <h1>Monthly Overall Expenses</h1>
          <div>
            <Bar options={chartOptions} data={chartData} />
          </div>

          <h1>Monthly Expenses Trend</h1>
          <div>
            <Line options={lineOptions} data={lineData} />
          </div>

          <h1>Fixed Expenses Breakdown</h1>
          <div>
            <Pie options={pieOptions} data={pieData} />
          </div>          
        </div>

        <div className="col-3 col-s-12">
          <Side />
        </div>
      </div>

      <div className="footer">
        <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>             
    </div>
  );
}

export default App;
