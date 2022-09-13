import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MonthlyOverallExp from "./pages/expenses/MonthlyOverallExp";
import MonthlyUtilityExp from "./pages/expenses/MonthlyUtilityExp";
import MonthlyMiscExp from "./pages/expenses/MonthlyMiscExp";

import './App.css';

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

export default App;