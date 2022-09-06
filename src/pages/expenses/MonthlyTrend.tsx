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
            <h1>Monthly Expenses Trend</h1>
            <div>
                <Line options={lineOptions} data={lineData} />
            </div>            
        </div>
    );
}

export default MonthlyTrend;