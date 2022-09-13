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

import Side from '../../../Side';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

const MonthlyUtilityExpTrend = () => {
    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Electricity',
                data: [71.92, 71.92, 71.92, 71.92, 71.92, 71.92],
                borderColor: 'rgb(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                label: 'Gas',
                data: [41.03, 41.03, 41.03, 41.03, 41.03, 41.03],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',                
            },
            {
                label: 'Water',
                data: [47.52, 47.52, 47.52, 47.52, 47.52, 47.52],                
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Petrol',
                data: [168.41, 125.92, 258.27, 227.42, 236.22, 96.27],
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
        }
    }

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Utility Expenses Trend</h1>
                <div>
                    <Line options={lineOptions} data={lineData} height="200" />
                </div>  
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>  
    );
}

export default MonthlyUtilityExpTrend;