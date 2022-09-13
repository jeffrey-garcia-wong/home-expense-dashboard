import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

import Side from '../../../Side';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const UtilityExpBreakdown = () => {
    const pieData = {
        labels: [
            'Electricity', 'Gas', 'Water', 'Petrol',
        ],
        datasets: [
            {
                label: 'Utility Expenses Breakdown',
                data: [71.92, 41.03, 47.52, 96.27],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,                 
            },
        ]
    }

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Utility expenses breakdown in GBP (£) of current month',
            }         
        },       
    }    

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Utility Expenses Breakdown</h1>
                <div>
                    <Pie options={pieOptions} data={pieData} />
                </div>
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>
    );
}

export default UtilityExpBreakdown;