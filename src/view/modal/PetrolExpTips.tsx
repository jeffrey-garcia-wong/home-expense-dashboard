import React, { ChangeEvent, useState } from "react";
import "./ExpTips.css";

function PetrolExpTips(props: any) {
  const { modalId } = props;

  const handleClose = (modalId: string) => {
    const modalPage = document.getElementById(modalId) as HTMLElement | null;
    // console.log(modalPage);
    if (modalPage != null) {
      modalPage.style.display = "none";
    }
  };

  const fuelConsumptionMpg = 28.5;
  const LITRES_PER_GALLON = 4.54609;
  const fuelConsumptionMpl = fuelConsumptionMpg / LITRES_PER_GALLON;
  const fuelConsumptionLpm = 1 / fuelConsumptionMpl;
  const petrolCost = 1.625;
  const milesToTravel = 1;
  const totalPetrolCost = fuelConsumptionLpm * milesToTravel * petrolCost;

  const [state, setState] = useState({
    fuelConsumptionMpgUnit: `${fuelConsumptionMpg.toFixed(3)} MPG`,
    fuelConsumptionMplUnit: `${fuelConsumptionMpl.toFixed(3)} Miles/Litre`,
    fuleConsumptionLpmUnit: `${fuelConsumptionLpm.toFixed(3)} Litres/Miles`,
    petrolCostUnit: `£ ${petrolCost.toFixed(3)}`,
    milesToTravelUnit: `${milesToTravel.toFixed(3)} Mile(s)`,
    totalPriceCostUnit: `£ ${totalPetrolCost.toFixed(3)}`,
  });

  const updateFuelConsumption = (event: ChangeEvent) => {
    const attr = (event.target as HTMLInputElement).name;
    const val = (event.target as HTMLInputElement).value;
    console.log(`${attr}`);

    switch (attr) {
      case "fuelConsumptionMpgUnit": {
        const runUpdateFuelConsumption = () => {
          const _fuelConsumptionMpg =
            val.indexOf(" MPG") == val.length - 4
              ? Number(val.substring(0, val.length > 4 ? val.length - 4 : 0))
              : Number(val);
          console.log(`${attr}: ${_fuelConsumptionMpg}`);
          const _fuelConsumptionMpl = _fuelConsumptionMpg / LITRES_PER_GALLON;
          const _fuleConsumptionLpm = 1 / _fuelConsumptionMpl;
          const _pertrolCostUnit = state.petrolCostUnit.substring(
            2,
            state.petrolCostUnit.length,
          );
          const _milesToTravel = state.milesToTravelUnit.substring(
            0,
            state.milesToTravelUnit.length - 8,
          );
          const _totalPetrolCost =
            _fuleConsumptionLpm *
            Number(_pertrolCostUnit) *
            Number(_milesToTravel);
          setState({
            fuelConsumptionMpgUnit: `${_fuelConsumptionMpg.toFixed(3)} MPG`,
            fuelConsumptionMplUnit: `${_fuelConsumptionMpl.toFixed(
              3,
            )} Miles/Litre`,
            fuleConsumptionLpmUnit: `${_fuleConsumptionLpm.toFixed(
              3,
            )} Litres/Miles`,
            petrolCostUnit: `${state.petrolCostUnit}`,
            milesToTravelUnit: `${state.milesToTravelUnit}`,
            totalPriceCostUnit: `£ ${_totalPetrolCost.toFixed(3)}`,
          });
        };
        runUpdateFuelConsumption();
        break;
      }
      case "petrolCostUnit": {
        const runUpdatePetrolCost = () => {
          const _pertrolCost =
            val.indexOf("£ ") == 0
              ? Number(val.substring(2, val.length))
              : Number(val);
          console.log(`${attr}: ${_pertrolCost}`);
          const _fuleConsumptionLpm = state.fuleConsumptionLpmUnit.substring(
            0,
            state.fuleConsumptionLpmUnit.length - 13,
          );
          const _milesToTravel = state.milesToTravelUnit.substring(
            0,
            state.milesToTravelUnit.length - 8,
          );
          const _totalPetrolCost =
            Number(_fuleConsumptionLpm) * _pertrolCost * Number(_milesToTravel);
          setState({
            fuelConsumptionMpgUnit: `${state.fuelConsumptionMpgUnit}`,
            fuelConsumptionMplUnit: `${state.fuelConsumptionMplUnit}`,
            fuleConsumptionLpmUnit: `${state.fuleConsumptionLpmUnit}`,
            petrolCostUnit: `£ ${_pertrolCost.toFixed(3)}`,
            milesToTravelUnit: `${state.milesToTravelUnit}`,
            totalPriceCostUnit: `£ ${_totalPetrolCost.toFixed(3)}`,
          });
        };
        runUpdatePetrolCost();
        break;
      }
      case "milesToTravel": {
        const runUpdateMilesToTravel = () => {
          const _milesToTravel =
            val.indexOf(" Mile(s)") == val.length - 8
              ? Number(val.substring(0, val.length - 8))
              : Number(val);
          console.log(`${attr}: ${_milesToTravel}`);
          const _fuleConsumptionLpm = state.fuleConsumptionLpmUnit.substring(
            0,
            state.fuleConsumptionLpmUnit.length - 13,
          );
          const _pertrolCostUnit = state.petrolCostUnit.substring(
            2,
            state.petrolCostUnit.length,
          );
          const _totalPetrolCost =
            Number(_fuleConsumptionLpm) *
            _milesToTravel *
            Number(_pertrolCostUnit);
          setState({
            fuelConsumptionMpgUnit: `${state.fuelConsumptionMpgUnit}`,
            fuelConsumptionMplUnit: `${state.fuelConsumptionMplUnit}`,
            fuleConsumptionLpmUnit: `${state.fuleConsumptionLpmUnit}`,
            petrolCostUnit: `${state.petrolCostUnit}`,
            milesToTravelUnit: `${_milesToTravel.toFixed(3)} Mile(s)`,
            totalPriceCostUnit: `£ ${_totalPetrolCost.toFixed(3)}`,
          });
        };
        runUpdateMilesToTravel();
        break;
      }
      default: {
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
                    <h2>How much fuel your car spent to travel?</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Distance travelled per Gallon of petrol (Miles Per Gallon)
                  </td>
                  <td>
                    <input
                      type="text"
                      name="fuelConsumptionMpgUnit"
                      value={state.fuelConsumptionMpgUnit}
                      onChange={updateFuelConsumption}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Distance travelled per Litre of petrol (Miles per Litre)
                  </td>
                  <td>
                    {`${state.fuelConsumptionMpgUnit} / ${LITRES_PER_GALLON}L = ${state.fuelConsumptionMplUnit}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Volume of petrol required to travel per Mile (Litres per
                    Mile)
                  </td>
                  <td>
                    {`1 / ${state.fuelConsumptionMplUnit} = ${state.fuleConsumptionLpmUnit}`}
                  </td>
                </tr>
                <tr>
                  <td>Price of Petrol- £ per Litre (£/L)</td>
                  <td>
                    <input
                      type="text"
                      name="petrolCostUnit"
                      value={state.petrolCostUnit}
                      onChange={updateFuelConsumption}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Distance to travel (Miles)</td>
                  <td>
                    <input
                      type="text"
                      name="milesToTravel"
                      value={state.milesToTravelUnit}
                      onChange={updateFuelConsumption}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total petrol cost (£)</td>
                  <td>
                    {`${state.fuleConsumptionLpmUnit} * ${state.milesToTravelUnit} * ${state.petrolCostUnit} = ${state.totalPriceCostUnit}`}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <p>
                      <b>
                        <i>
                          * If the MPG increases or the petrol prices decreases,
                          total petrol cost reduces.
                        </i>
                      </b>
                    </p>
                    <ul>
                      <li>
                        <u>Round Trip Journey Distance</u>
                      </li>
                      <li>Home to Sacred Heart = 7 Miles</li>
                      <li>Home to ASDA (Southgate) = 8 Miles</li>
                      <li>Home to TESCO (Borehamwood) = 8 Miles</li>
                      <li>Home to TESCO (Colney Hatch Lane) = 8 Miles</li>
                      <li>Home to Morrison (Colindale) = 13 Miles</li>
                      <li>Home to Brent Cross Shopping Centre = 15 Miles</li>
                      <li>Home to Wing Yip Supermarket = 17 Miles</li>
                      <li>Home to Watford COSTCO = 17 Miles</li>
                      <li>Home to Harrow BMX Park = 20 Miles</li>
                      <li>Home to Wembley COSTCO = 22 Miles</li>
                      <li>Home to Westfield (Shepherd Bush) = 28 Miles</li>
                      <li>Home to Lee Valley BMX Park = 38 Miles</li>
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

export default PetrolExpTips;
