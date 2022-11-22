import React, { ChangeEvent, useState } from "react";
import "./ExpTips.css";

function MortgageLoan(props: any) {
  const { modalId } = props;

  const handleClose = (modalId: string) => {
    const modalPage = document.getElementById(modalId) as HTMLElement | null;
    // console.log(modalPage);
    if (modalPage != null) {
      modalPage.style.display = "none";
    }
  };

  const mortgageAmount = 416249;
  const mortgateTerms = 25;
  const interestRate = 5.54;
  const monthlyRepaymentAmount = 2566;
  const totalMortgageCost = 769826;

  const [state, setState] = useState({
    mortgageAmountUnit: `£ ${mortgageAmount.toFixed(2)}`,
    mortgateTermsUnit: `${mortgateTerms.toFixed(2)} years`,
    interestRateUnit: `${interestRate.toFixed(2)} %`,
    monthlyRepaymentAmountUnit: `£ ${monthlyRepaymentAmount.toFixed(2)}`,
    totalMortgageCostUnit: `£ ${totalMortgageCost.toFixed(2)}`,
  });

  const updateMortgageRepayment = (event: ChangeEvent) => {
    const attr = (event.target as HTMLInputElement).name;
    const val = (event.target as HTMLInputElement).value;
    console.log(`${attr}`);

    switch (attr) {
      case "mortgageAmountUnit": {
        const runUpdateMortgageAmount = () => {
          const _mortgageAmount =
            val.indexOf("£ ") == 0
              ? Number(val.substring(2, val.length))
              : Number(val);
          console.log(`${attr}: ${_mortgageAmount}`);
          const _mortgageTerms =
            Number(
              state.mortgateTermsUnit.substring(
                0,
                state.mortgateTermsUnit.length - 6,
              ),
            ) * 12;
          const _interestRate =
            Number(
              state.interestRateUnit.substring(
                0,
                state.interestRateUnit.length - 2,
              ),
            ) /
            100 /
            12;
          const _monthlyRepaymentAmount =
            (_mortgageAmount *
              (_interestRate * (1 + _interestRate) ** _mortgageTerms)) /
            ((1 + _interestRate) ** _mortgageTerms - 1);
          const _totalMortgageCost = _monthlyRepaymentAmount * _mortgageTerms;
          setState({
            mortgageAmountUnit: `£ ${_mortgageAmount.toFixed(2)}`,
            mortgateTermsUnit: `${state.mortgateTermsUnit}`,
            interestRateUnit: `${state.interestRateUnit}`,
            monthlyRepaymentAmountUnit: `£ ${_monthlyRepaymentAmount.toFixed(
              2,
            )}`,
            totalMortgageCostUnit: `£ ${_totalMortgageCost.toFixed(2)}`,
          });
        };
        runUpdateMortgageAmount();
        break;
      }
      case "mortgageTermsUnit": {
        const runUpdateMortgageTerms = () => {
          const _mortgageTerms =
            val.indexOf(" years") == val.length - 6
              ? Number(val.substring(0, val.length > 6 ? val.length - 6 : 0))
              : Number(val);
          console.log(`${attr}: ${_mortgageTerms}`);
          const _mortgageAmount = Number(
            state.mortgageAmountUnit.substring(
              2,
              state.mortgageAmountUnit.length,
            ),
          );
          const _interestRate =
            Number(
              state.interestRateUnit.substring(
                0,
                state.interestRateUnit.length - 2,
              ),
            ) /
            100 /
            12;
          const _monthlyRepaymentAmount =
            (_mortgageAmount *
              (_interestRate * (1 + _interestRate) ** (_mortgageTerms * 12))) /
            ((1 + _interestRate) ** (_mortgageTerms * 12) - 1);
          const _totalMortgageCost =
            _monthlyRepaymentAmount * _mortgageTerms * 12;
          setState({
            mortgageAmountUnit: `${state.mortgageAmountUnit}`,
            mortgateTermsUnit: `${_mortgageTerms.toFixed(2)} years`,
            interestRateUnit: `${state.interestRateUnit}`,
            monthlyRepaymentAmountUnit: `£ ${_monthlyRepaymentAmount.toFixed(
              2,
            )}`,
            totalMortgageCostUnit: `£ ${_totalMortgageCost.toFixed(2)}`,
          });
        };
        runUpdateMortgageTerms();
        break;
      }
      case "interestRateUnit": {
        const runUpdateInterestRate = () => {
          const _interestRate =
            val.indexOf(" %") == val.length - 2
              ? Number(val.substring(0, val.length > 2 ? val.length - 2 : 0))
              : Number(val);
          console.log(`${attr}: ${_interestRate}`);
          const _mortgageAmount = Number(
            state.mortgageAmountUnit.substring(
              2,
              state.mortgageAmountUnit.length,
            ),
          );
          const _mortgageTerms =
            Number(
              state.mortgateTermsUnit.substring(
                0,
                state.mortgateTermsUnit.length - 6,
              ),
            ) * 12;
          const _monthlyRepaymentAmount =
            (_mortgageAmount *
              ((_interestRate / 100 / 12) *
                (1 + _interestRate / 100 / 12) ** _mortgageTerms)) /
            ((1 + _interestRate / 100 / 12) ** _mortgageTerms - 1);
          const _totalMortgageCost = _monthlyRepaymentAmount * _mortgageTerms;
          setState({
            mortgageAmountUnit: `${state.mortgageAmountUnit}`,
            mortgateTermsUnit: `${state.mortgateTermsUnit}`,
            interestRateUnit: `${_interestRate.toFixed(2)} %`,
            monthlyRepaymentAmountUnit: `£ ${_monthlyRepaymentAmount.toFixed(
              2,
            )}`,
            totalMortgageCostUnit: `£ ${_totalMortgageCost.toFixed(2)}`,
          });
        };
        runUpdateInterestRate();
        break;
      }
    }
  };

  return (
    <div id={modalId} className="modal">
      <div className="modal-content">
        <span
          id="modalClose"
          className="close"
          onClick={() => handleClose(modalId)}
        >
          &times;
        </span>
        <div className="row">
          <div className="col-12 col-s-12 menu">
            <table id="expense-tips">
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h2>How a base rate change could affect your mortgage?</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mortgage Amount (£)</td>
                  <td>
                    <input
                      type="text"
                      name="mortgageAmountUnit"
                      value={state.mortgageAmountUnit}
                      onChange={updateMortgageRepayment}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mortgage Terms (years)</td>
                  <td>
                    <input
                      type="text"
                      name="mortgageTermsUnit"
                      value={state.mortgateTermsUnit}
                      onChange={updateMortgageRepayment}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Interest Rate (%)</td>
                  <td>
                    <input
                      type="text"
                      name="interestRateUnit"
                      value={state.interestRateUnit}
                      onChange={updateMortgageRepayment}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Monthly Repayments Amount (£)</td>
                  <td>{`${state.monthlyRepaymentAmountUnit}`}</td>
                </tr>
                <tr>
                  <td>Total cost of Mortgage (£)</td>
                  <td>{`${state.totalMortgageCostUnit}`}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <p>
                      <b>
                        <i>
                          For a fixed-rate mortgage, the mortgage interest rate
                          will stay the same until the end of the fixed rate
                          period. When the fixed rate period comes to an end,
                          the mortgage will automatically move to Standard
                          Variable Rate, where most banks review this rate
                          whenever the base rate changes.
                        </i>
                      </b>
                    </p>
                    <ul>
                      <li>
                        <u>See also:</u>
                      </li>
                      <li>https://www.hsbc.co.uk/mortgages/our-rates/</li>
                      <li>
                        https://www.hsbc.co.uk/mortgages/bank-of-england-base-rate-calculator/
                      </li>
                      <li>
                        https://www.hsbc.co.uk/help/bank-of-england-base-rate/
                      </li>
                    </ul>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortgageLoan;
