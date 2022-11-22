import { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";

import MonthlyOverallExp from "./pages/expenses/MonthlyOverallExp";
import MonthlyFixedExp from "./pages/expenses/MonthlyFixedExp";
import MonthlyUtilityExp from "./pages/expenses/MonthlyUtilityExp";
import MonthlyMiscExp from "./pages/expenses/MonthlyMiscExp";

import NoPage from "./pages/NoPage";

import ExpenseData from "./data/DataAggregator";
import aggregateExpenses from "./data/DataAggregator";

import './App.css';

class App extends Component<any> {
  ExpenseData:any = null;

  constructor(props:any) {
    super(props);
    console.log(`constructor: ${this.constructor.name}`);
    this.ExpenseData = aggregateExpenses(props.data);
  }

  render() {
    console.log(`render: ${this.constructor.name}`);

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverallExp expensesData={this.ExpenseData.overallExpenses} />} />
            <Route path="monthlyOverallExp" element={<MonthlyOverallExp expensesData={this.ExpenseData.overallExpenses} />} />
            <Route path="monthlyFixedExp" element={<MonthlyFixedExp expensesData={this.ExpenseData.fixedExpenses} />} />
            <Route path="monthlyUtilityExp" element={<MonthlyUtilityExp expensesData={this.ExpenseData.utilityExpenses} />} />
            <Route path="monthlyMiscExp" element={<MonthlyMiscExp expensesData={this.ExpenseData.miscExpenses} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    console.log(`componentDidMount: ${this.constructor.name}`);
  }  
}

export default App;