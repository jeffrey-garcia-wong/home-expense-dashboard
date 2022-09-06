import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MonthlyOverall from "./pages/expenses/MonthlyOverall";
import MonthlyTrend from "./pages/expenses/MonthlyTrend";
import FixedExpBreakdown from "./pages/expenses/FixedExpBreakdown";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverall />} />
            <Route path="monthlyOverall" element={<MonthlyOverall />} />
            <Route path="monthlyTrend" element={<MonthlyTrend />} />
            <Route path="fixedExpBreakdown" element={<FixedExpBreakdown />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;