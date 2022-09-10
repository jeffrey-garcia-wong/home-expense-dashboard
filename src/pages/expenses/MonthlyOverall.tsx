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

import Side from '../../Side';

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
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Fixed expenses per month',
                data: [2150.84, 2150.84, 2150.84, 2150.84, 2150.84, 2167.08],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'Utility expenses per month',
                data: [470.96, 428.47, 560.82, 529.97, 538.77, 398.82],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'Miscellaneous expenses per month',
                data: [1029.69, 1578.91, 1420.97, 3119.75, 5493.09, 3841.80],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            },              
        ]
    };

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: {
                    stepSize: 100
                }                    
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    footer: function(items:any) {
                        var total = 0;
                        for (var i = 0; i < chartData['datasets'].length; i++){
                            total += chartData['datasets'][i].data[items[0].dataIndex];
                        }
                        return 'Total: ' + total 
                      }
                }
            },
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
            <div className="col-6 col-s-9">
                <h1>Monthly Overall Expenses</h1>
                <div>
                    <Bar options={chartOptions} data={chartData} />
                </div>
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>
    );
};

export default MonthlyOverall;