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

const FixedExpBreakdown = () => {

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
            }         
        },       
    }

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Fixed Expenses Breakdown</h1>
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

export default FixedExpBreakdown;