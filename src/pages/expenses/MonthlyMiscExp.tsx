import { MouseEvent } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    BarElement,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import Side from '../../Side';

import './MonthlyExp.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    BarElement,
);

const MonthlyMiscExp = () => {
    const barData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Marketing',
                data: [478.86, 772.34, 682.25, 561.78, 683.44, 559.43],
                borderColor: 'rgb(191, 255, 0, 1)',
                backgroundColor: 'rgba(191, 255, 0, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Outdoor Dining',
                data: [249.83, 109.31, 380.46, 463.99, 345.15, 181.49],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Appliances',
                data: [0.00, 150.00, 0.00, 2093.98, 1295.50, 745.50],                
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            },            
            {
                label: 'Home Refurbishment',
                data: [0.00, 55.00, 0.00, 0.00, 2825.00, 1862.78],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2
            },       
            {
                label: 'School & Activities',
                data: [301.00, 542.26, 528.26, 170.00, 514.00, 612.60],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2
            },
        ]
    };

    const barOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: '#666666',                    
                }                
            },
            y: {
                stacked: true,
                grid: {
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: '#666666',                    
                },                
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
                        for (var i = 0; i < barData['datasets'].length; i++){
                            total += barData['datasets'][i].data[items[0].dataIndex];
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

    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Marketing',
                data: [478.86, 772.34, 682.25, 561.78, 683.44, 559.43],
                borderColor: 'rgb(191, 255, 0, 1)',
                backgroundColor: 'rgba(191, 255, 0, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Outdoor Dining',
                data: [249.83, 109.31, 380.46, 463.99, 345.15, 181.49],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Appliances',
                data: [0.00, 150.00, 0.00, 2093.98, 1295.50, 745.50],                
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            },            
            {
                label: 'Home Refurbishment',
                data: [0.00, 55.00, 0.00, 0.00, 2825.00, 1862.78],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2
            },       
            {
                label: 'School & Activities',
                data: [301.00, 542.26, 528.26, 170.00, 514.00, 612.60],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2
            },
        ],        
    }

    const lineOptions = {
        animations: {
            x: {
                duration: 2500,
                from: -1
            },
            y: {
                duration: 0,
                from: 0
            }
        },        
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        stacked: false,    
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    usePointStyle: true,
                },                      
            },
            title: {
                display: true,
                text: 'Misc. expenses trend in GBP (£)',
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

    const handleTabClick = (ev:MouseEvent) => {
        const tabItem = (ev.target as Element) as HTMLElement|null;
        if (tabItem == null) return;
        // console.log(tabItem.id);
        document.getElementById(tabItem.id + "-content")!.className = "tabcontent active";
        document.getElementById(tabItem.id)!.className = "tablinks active";

        const tabContentItems = document.getElementsByClassName("tabcontent active");
        if (tabContentItems!=null && tabContentItems.length>0) {
            for (var i = 0; i < tabContentItems.length; i++) {
                if (tabContentItems[i].id.indexOf(tabItem.id) < 0) {
                    tabContentItems[i].className = "tabcontent";
                }
            }
        }

        const tabLinkItems = document.getElementsByClassName("tablinks active");
        if (tabLinkItems!=null && tabLinkItems.length>0) {
            for (var i = 0; i < tabLinkItems.length; i++) {
                if (tabLinkItems[i].id.indexOf(tabItem.id) < 0) {
                    tabLinkItems[i].className = "tablinks";
                }
            }
        }        
    };

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Miscellaneous Expenses</h1>

                <div className="tab">
                    <button id="breakdown" className="tablinks active" onClick={handleTabClick}>Breakdown</button>
                    <button id="trend" className="tablinks" onClick={handleTabClick}>Trend</button>
                </div>

                <div id="breakdown-content" className="tabcontent active">
                    <Bar options={barOptions} data={barData} height="300" />
                </div>

                <div id="trend-content" className="tabcontent">
                    <Line options={lineOptions} data={lineData} height="300" />
                </div>                
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>          
    );
}

export default MonthlyMiscExp;