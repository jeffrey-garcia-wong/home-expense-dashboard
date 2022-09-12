import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  } from 'chart.js';
  
import { Line } from 'react-chartjs-2';

import Side from '../../Side';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

const MonthlyMiscExpTrend = () => {
    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Marketing',
                data: [478.86, 772.34, 682.25, 561.78, 683.44, 559.43],
                borderColor: 'rgb(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                label: 'Outdoor Dining',
                data: [249.83, 109.31, 380.46, 463.99, 345.15, 181.49],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',                
            },
            {
                label: 'Appliances',
                data: [0.00, 150.00, 0.00, 2093.98, 1295.50, 745.50],                
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },            
            {
                label: 'Home Refurbishment',
                data: [0.00, 55.00, 0.00, 0.00, 2825.00, 1862.78],
                borderColor: 'rgba(255, 64, 0, 1)',
                backgroundColor: 'rgba(255, 64, 0, 0.2)',
            },       
            {
                label: 'School & Activities',
                data: [301.00, 542.26, 528.26, 170.00, 514.00, 612.60],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            },
        ],        
    }

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
              text: 'Utility expenses trend in GBP (£)',
            },
          },   
          scales: {
                x: {
                    grid: {
                        drawBorder: true,
                        drawOnChartArea: true,
                        color: '#666666',                    
                    }
                },            
                y: {
                    type: 'linear' as const,
                    display: true,
                    position: 'left' as const,
                    grid: {
                        drawBorder: true,
                        drawOnChartArea: true,
                        color: '#666666',
                    },
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50
                    },
                }   
          },            
    }
    
    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Utility Expenses Trend</h1>
                <div>
                    <Line options={lineOptions} data={lineData} height="200"/>
                </div>  
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>          
    );
}

export default MonthlyMiscExpTrend;