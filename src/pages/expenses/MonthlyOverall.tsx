import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
  
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
);

const MonthlyOverall = () => {
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
        
    return (
        <div>
            <h1>Monthly Overall Expenses</h1>
            <div>
                <Bar options={chartOptions} data={chartData} />
            </div>
        </div>
    );
};

export default MonthlyOverall;