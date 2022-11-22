import React, { MouseEvent } from 'react';

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

import { Bar, Line } from 'react-chartjs-2';

import './MonthlyExp.css';
import ElectricityExpTips from '../../modal/ElectricityExpTips';
import PetrolExpTips from '../../modal/PetrolExpTips';

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

function MonthlyUtilityExp(props:any) {
  const expData = props.expensesData;

  const barOptions = {
    responsive: true,
    animations: {
      x: {
        duration: 0,
        from: 0,
      },
      y: {
        duration: 2500,
        from: 0,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          drawBorder: true,
          drawOnChartArea: true,
          color: '#666666',
        },
      },
      y: {
        stacked: true,
        grid: {
          drawBorder: true,
          drawOnChartArea: true,
          color: '#666666',
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          footer(items:any) {
            let total = 0;
            for (let i = 0; i < expData.monthly.datasets.length; i++) {
              total += expData.monthly.datasets[i].data[items[0].dataIndex] * 100;
            }
            return `Total: £ ${(total / 100).toFixed(2)}`;
          },
        },
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
        from: -1,
      },
      y: {
        duration: 0,
        from: 0,
      },
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
        },
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
          stepSize: 50,
        },
      },
    },
  };

  const lineOptionsAvg = JSON.parse(JSON.stringify(lineOptions));
  lineOptionsAvg.plugins.title.text = 'Utility expenses average in GBP (£)';

  const handleTabClick = (ev:MouseEvent) => {
    const tabItem = (ev.target as Element) as HTMLElement | null;
    if (tabItem == null) return;
    // console.log(tabItem.id);
    tabItem.className = 'tablinks active';

    const tabItemContent = document.getElementById(`${tabItem.id}-content`);
    if (tabItemContent != null) tabItemContent.className = 'tabcontent active';

    const tabContentItems = document.getElementsByClassName('tabcontent active');
    if (tabContentItems != null && tabContentItems.length > 0) {
      for (let i = 0; i < tabContentItems.length; i++) {
        if (tabContentItems[i].id.indexOf(tabItem.id) < 0) {
          tabContentItems[i].className = 'tabcontent';
        }
      }
    }

    const tabLinkItems = document.getElementsByClassName('tablinks active');
    if (tabLinkItems != null && tabLinkItems.length > 0) {
      for (let i = 0; i < tabLinkItems.length; i++) {
        if (tabLinkItems[i].id.indexOf(tabItem.id) < 0) {
          tabLinkItems[i].className = 'tablinks';
        }
      }
    }
  };

  const MODAL_PAGE = {
    ELECTRICITY_EXP_TIPS: 'how-solar-panel-offset-electricity-expense',
    PETROL_EXP_TIPS: 'how-much-fuel-your-car-spent-to-travel',
  };

  const handleSideMenuClick = (modalPageId:string) => {
    // console.log(modalPageId);
    const modalPage = document.getElementById(modalPageId) as HTMLElement | null;
    if (modalPage != null) {
      modalPage.style.display = 'block';
    }
  };

  return (
    <div>
      <div className="col-6 col-s-9">
        <h1>Monthly Utility Expenses</h1>

        <div className="tab">
          <button id="average" type="button" className="tablinks active" onClick={handleTabClick}>Average</button>
          <button id="breakdown" type="button" className="tablinks" onClick={handleTabClick}>Breakdown</button>
          <button id="trend" type="button" className="tablinks" onClick={handleTabClick}>Trend</button>
        </div>

        <div id="average-content" className="tabcontent active">
          <Line options={lineOptionsAvg} data={expData.average} height="300" />
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
          <h3>Utility Expenses Tips</h3>
          <p>
            <span className="label" onClick={() => handleSideMenuClick(MODAL_PAGE.ELECTRICITY_EXP_TIPS)}>
              Solar Panel
            </span>
          </p>
          <p>
            <span className="label" onClick={() => handleSideMenuClick(MODAL_PAGE.PETROL_EXP_TIPS)}>
              Car Petrol
            </span>
          </p>
        </div>
      </div>

      <ElectricityExpTips modalId={MODAL_PAGE.ELECTRICITY_EXP_TIPS} />
      <PetrolExpTips modalId={MODAL_PAGE.PETROL_EXP_TIPS} />
    </div>
  );
}

export default MonthlyUtilityExp;
