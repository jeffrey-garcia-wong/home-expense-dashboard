import { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";

import MonthlyOverallExp from "./pages/expenses/MonthlyOverallExp";
import MonthlyFixedExp from "./pages/expenses/MonthlyFixedExp";
import MonthlyUtilityExp from "./pages/expenses/MonthlyUtilityExp";
import MonthlyMiscExp from "./pages/expenses/MonthlyMiscExp";

import ExpenseData from "./Data";

import './App.css';

class App extends Component<any> {
  render() {
    // const init = (() => {
    //   console.log(`${JSON.stringify(ExpenseData.fixedExpenses)}`);
    // })();

    const data = {
      overallExpenses: ExpenseData.overallExpenses,
      fixedExpenses: ExpenseData.fixedExpenses,
      utilityExpenses: ExpenseData.utilityExpenses,
      miscExpenses: ExpenseData.miscExpenses
    };

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverallExp expensesData={data.overallExpenses} />} />
            <Route path="monthlyOverallExp" element={<MonthlyOverallExp expensesData={data.overallExpenses} />} />
            <Route path="monthlyFixedExp" element={<MonthlyFixedExp expensesData={data.fixedExpenses} />} />
            <Route path="monthlyUtilityExp" element={<MonthlyUtilityExp expensesData={data.utilityExpenses} />} />
            <Route path="monthlyMiscExp" element={<MonthlyMiscExp expensesData={data.miscExpenses} />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;