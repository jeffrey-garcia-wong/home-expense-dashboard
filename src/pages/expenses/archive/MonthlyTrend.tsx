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

const MonthlyTrend = () => {
    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Fixed expenses',
                data: [2150.84, 2150.84, 2150.84, 2150.84, 2150.84, 2167.08],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Utility expenses',
                data: [470.96, 428.47, 560.82, 529.97, 538.77, 398.82],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Miscellaneous expenses',
                data: [1029.69, 1578.91, 1420.97, 3119.75, 5493.09, 3841.80],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },      
        ],
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
                }
            }   
        }
    };  

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Expenses Trend</h1>
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

export default MonthlyTrend;