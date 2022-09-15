import { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MonthlyOverallExp from "./pages/expenses/MonthlyOverallExp";
import MonthlyUtilityExp from "./pages/expenses/MonthlyUtilityExp";
import MonthlyMiscExp from "./pages/expenses/MonthlyMiscExp";

import './App.css';

class App1 extends Component<any> {
  render() {
    const data = {
      overallExpenses: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Fixed expenses',
                data: [2150.84, 2150.84, 2150.84, 2150.84, 2150.84, 2167.08],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Utility expenses',
                data: [470.96, 428.47, 560.82, 529.97, 538.77, 398.82],
                borderColor: 'rgba(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 2
            },
            {
                label: 'Miscellaneous expenses',
                data: [1029.69, 1578.91, 1420.97, 3119.75, 5493.09, 3841.80],
                borderColor: 'rgba(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            },              
        ]
      },
      utilityExpenses: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
              label: 'Electricity',
              data: [71.92, 71.92, 71.92, 71.92, 71.92, 71.92],
              borderColor: 'rgb(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2
          },
          {
              label: 'Gas',
              data: [41.03, 41.03, 41.03, 41.03, 41.03, 41.03],
              borderColor: 'rgba(255, 206, 86, 1)',
              backgroundColor: 'rgba(255, 206, 86, 0.2)', 
              borderWidth: 2               
          },
          {
              label: 'Water',
              data: [47.52, 47.52, 47.52, 47.52, 47.52, 47.52],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2
          },
          {
              label: 'Petrol',
              data: [168.41, 125.92, 258.27, 227.42, 236.22, 96.27],
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderWidth: 2
          },              
        ]      
      },
      miscExpenses: {
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
      }           
    };

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverallExp expensesData={data.overallExpenses} />} />
            <Route path="monthlyOverallExp" element={<MonthlyOverallExp expensesData={data.overallExpenses} />} />
            <Route path="monthlyUtilityExp" element={<MonthlyUtilityExp expensesData={data.utilityExpenses} />} />
            <Route path="monthlyMiscExp" element={<MonthlyMiscExp expensesData={data.miscExpenses} />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverallExp />} />
            <Route path="monthlyOverallExp" element={<MonthlyOverallExp />} />
            <Route path="monthlyUtilityExp" element={<MonthlyUtilityExp />} />
            <Route path="monthlyMiscExp" element={<MonthlyMiscExp />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App1;