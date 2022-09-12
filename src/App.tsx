import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MonthlyOverall from "./pages/expenses/MonthlyOverall";
import MonthlyTrend from "./pages/expenses/MonthlyTrend";
import MonthlyUtilityExpTrend from "./pages/expenses/MonthlyUtilityExpTrend";
import MonthlyMiscExpTrend from "./pages/expenses/MonthlyMiscExpTrend";
import FixedExpBreakdown from "./pages/expenses/FixedExpBreakdown";
import UtilityExpBreakdown from "./pages/expenses/UtilityExpBreakdown";
import MiscExpBreakdown from "./pages/expenses/MiscExpBreakdown";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MonthlyOverall />} />
            <Route path="monthlyOverall" element={<MonthlyOverall />} />
            <Route path="monthlyTrend" element={<MonthlyTrend />} />
            <Route path="monthlyUtilityExpTrend" element={<MonthlyUtilityExpTrend />} />
            <Route path="monthlyMiscExpTrend" element={<MonthlyMiscExpTrend />} />
            <Route path="fixedExpBreakdown" element={<FixedExpBreakdown />} />
            <Route path="utilityExpBreakdown" element={<UtilityExpBreakdown />} />
            <Route path="miscExpBreakdown" element={<MiscExpBreakdown />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;