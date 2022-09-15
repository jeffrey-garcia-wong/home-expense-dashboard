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

import './MonthlyExp.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement
);

const MonthlyOverallExp = (props:any) => {
    const expData = props.expensesData;
    
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
                        for (var i = 0; i < expData['datasets'].length; i++){
                            total += expData['datasets'][i].data[items[0].dataIndex];
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
                    <Bar options={barOptions} data={expData} height="300" />
                </div>

                <div id="trend-content" className="tabcontent">
                    <Line options={lineOptions} data={expData} height="300" />
                </div>                
            </div>
            <div className="col-3 col-s-12">
                <Side data={expData}/>
            </div>
        </div>
    );
};

export default MonthlyOverallExp;