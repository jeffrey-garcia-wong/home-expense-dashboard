import { MouseEvent } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement
} from 'chart.js';
  
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import Side from '../../Side';

import './MonthlyOverall.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement
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
    }

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Overall Expenses</h1>

                <div className="tab">
                    <button id="breakdown" className="tablinks active" onClick={handleTabClick}>Breakdown</button>
                    <button id="trend" className="tablinks" onClick={handleTabClick}>Trend</button>
                </div>

                <div id="breakdown-content" className="tabcontent active">
                    <Bar options={chartOptions} data={chartData} height="200" />
                </div>

                <div id="trend-content" className="tabcontent">
                    <Line options={lineOptions} data={lineData} height="200" />
                </div>                
            </div>
            <div className="col-3 col-s-12">
                <Side />
            </div>
        </div>
    );
};

export default MonthlyOverall;