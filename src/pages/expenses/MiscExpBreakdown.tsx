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

import Side from '../../Side';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const MiscExpBreakdown = () => {
    const pieData = {
        labels: [
            'Marketing', 'Outdoor Dining',
            'Allen Swim+ Summer Course', 'Audrey Swim+ Summer Course', 
            'Air Conditioner (outstanding)', 'Allen Swim+ New Term',
            'Audrey Swim+ New Term', 'Easigrass (deposit)',
            'Audrey French Class'
        ],
        datasets: [
            {
                label: 'Misc. Expenses Breakdown',
                data: [559.43, 181.49, 65, 65, 745.5, 125.3, 125.3, 1862.78, 112],
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
                ],
                borderWidth: 1,                 
            }
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
                text: 'Fixed expenses breakdown in GBP (£) of current month',
            }         
        }        
    }

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Misc. Expenses Breakdown</h1>
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

export default MiscExpBreakdown;