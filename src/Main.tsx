import { MouseEvent } from "react";
import { Outlet, Link } from "react-router-dom";

const Main = () => {
    const handleMenuClick = (ev:MouseEvent) => {
        // console.log(`{ev.target}`);
        const dropDownMenu = (ev.target as Element).nextElementSibling as HTMLElement|null;
        // console.log(dropDownMenu);
        if (dropDownMenu == null) return;
        if (dropDownMenu.style.display === "block") {
          dropDownMenu.style.display = "none";
        } else {
          dropDownMenu.style.display = "block";
        }
      };
    
    return (
        <div>
            <div className="header">
                <h1>UK HOME</h1>
            </div>

            <div className="row">
                <div className="col-3 col-s-3 menu">
                    <ul>
                        <li>
                            <a href="#" onClick={handleMenuClick}>Expenses</a>
                            <div className="drop-down-menu">              
                                <Link to="/monthlyOverall">Monthly Overall</Link>
                                <Link to="/monthlyTrend">Monthly Trend</Link>
                                <Link to="/monthlyUtilityExpTrend">Utility Expenses Trend</Link>
                                <Link to="/monthlyMiscExpTrend">Misc. Expenses Trend</Link>
                                <Link to="/fixedExpBreakdown">Fixed Expenses</Link>
                                <Link to="/utilityExpBreakdown">Utility Expenses</Link>
                                <Link to="/miscExpBreakdown">Misc Expenses</Link>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={handleMenuClick}>Investments</a>
                        </li>
                        <li>
                            <a href="#" onClick={handleMenuClick}>Tax</a>
                        </li>
                        <li>
                            <a href="#" onClick={handleMenuClick}>Insurance</a>
                        </li>
                        <li>
                            <a href="#" onClick={handleMenuClick}>Outstanding</a>
                        </li>
                    </ul>  
                </div>

                <div>
                    <Outlet />
                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>    
        </div>
    );
}

export default Main;