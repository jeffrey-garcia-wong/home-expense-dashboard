import { MouseEvent } from "react";
import { Link } from "react-router-dom";

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

import './MonthlyExp.css';
import Side from '../../Side';
import ElectricityExpTips from "../../modal/ElectricityExpTips";
import PetrolExpTips from "../../modal/PetrolExpTips";

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

const MonthlyUtilityExp = (props:any) => {
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
                            total += expData['datasets'][i].data[items[0].dataIndex] * 100;
                        }
                        return 'Total: £ ' + (total / 100).toFixed(2);
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
                text: 'Utility expenses trend in GBP (£)',
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
        }
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

    const MODAL_PAGE = {
        ELECTRICITY_EXP_TIPS: 'how-solar-panel-offset-electricity-expense',
        PETROL_EXP_TIPS: 'how-much-fuel-your-car-spent-to-travel'
    }

    const handleSideMenuClick = (modalPageId:string) => {
        // console.log(modalPageId);
        const modalPage = document.getElementById(modalPageId) as HTMLElement|null;
        if (modalPage != null) {
            modalPage.style.display = "block";
        }
    };

    return (
        <div>
            <div className="col-6 col-s-9">
                <h1>Monthly Utility Expenses</h1>

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
                <div className="aside">
                    <h3>Utility Expenses Tips</h3>
                    <p>
                        <a href="#" onClick={(ev:MouseEvent) => handleSideMenuClick(MODAL_PAGE.ELECTRICITY_EXP_TIPS)}>
                            How solar panel offset electricity expense?
                        </a>
                    </p>
                    <p>
                        <a href="#" onClick={(ev:MouseEvent) => handleSideMenuClick(MODAL_PAGE.PETROL_EXP_TIPS)}>
                            How much fuel your car spent to travel?
                        </a>
                    </p>
                    
                </div>
            </div>

            <ElectricityExpTips modalId={MODAL_PAGE.ELECTRICITY_EXP_TIPS} />
            <PetrolExpTips modalId={MODAL_PAGE.PETROL_EXP_TIPS} />
        </div>        
    );
}

export default MonthlyUtilityExp;