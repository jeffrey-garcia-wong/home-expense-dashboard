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

import '../../Side.css';

import './MonthlyExp.css';
import MortgageLoan from "../../modal/MortgageLoan";

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

const MonthlyFixedExp = ((props:any) => {
    const expData = props.expensesData;

    const barOptions = {
        responsive: true,
        animations: {
            x: {
                duration: 0,
                from: 0
            },
            y: {
                duration: 2500,
                from: 0
            }
        },         
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
                        for (var i = 0; i < expData['monthly']['datasets'].length; i++) {
                            total += expData['monthly']['datasets'][i].data[items[0].dataIndex] * 100;
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
    
    const MODAL_PAGE = {
        MORTGAGE_LOAN: 'mortgage-loan',
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
                <h1>Monthly Fixed Expenses</h1>

                <div className="tab">
                    <button id="average" className="tablinks active" onClick={handleTabClick}>Trend</button>
                    <button id="breakdown" className="tablinks" onClick={handleTabClick}>Breakdown</button>
                    <button id="trend" className="tablinks" onClick={handleTabClick}>Trend</button>
                </div>

                <div id="average-content" className="tabcontent active">
                    <Line options={lineOptions} data={expData.average} height="300" />
                </div> 

                <div id="breakdown-content" className="tabcontent">
                    <Bar options={barOptions} data={expData.monthly} height="300" />
                </div>

                <div id="trend-content" className="tabcontent">
                    <Line options={lineOptions} data={expData.monthly} height="300" />
                </div>                
            </div>

            <div className="col-3 col-s-12">
                <div className="aside">
                    <h3>Fixed Expenses Tips</h3>
                    <p>
                        <span className="label" onClick={(ev:MouseEvent) => handleSideMenuClick(MODAL_PAGE.MORTGAGE_LOAN)}>
                            Mortgage Loan
                        </span>
                    </p>
                    {/* <p>
                        <a href="#">
                            HP Print
                        </a>
                    </p>                     
                    <p>
                        <a href="#">
                            Car Insurance
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Home Insurance
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Electronic Appliances Warranty
                        </a>
                    </p>*/}
                </div>

                <MortgageLoan modalId={MODAL_PAGE.MORTGAGE_LOAN} />
            </div>
        </div>          
    );    
});

export default MonthlyFixedExp;