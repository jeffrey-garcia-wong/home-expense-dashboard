import { ChangeEvent, useState } from 'react';
import './ExpTips.css';

const ElectricityExpTips = (props:any) => {
    const { modalId } = props;

    const handleClose = ((modalId:string) => {
        const modalPage = document.getElementById(modalId) as HTMLElement|null;
        // console.log(modalPage);
        if (modalPage != null) {
            modalPage.style.display = "none";
        }
    });

    const tariffPrice = 26.19;
    const dailyAvgConsumption = 8;
    const yearlyAvgConsumption:number = dailyAvgConsumption * 365;
    const yearlySolarEnergy = 1291.68;
    const yearlyCostSaved:number = yearlySolarEnergy * tariffPrice / 100;
    const estSolarPanelCost = 8086;
    const offsetYears:number = estSolarPanelCost / yearlyCostSaved;

    const [state, setState] = useState({ 
        tariffPriceUnit: `${tariffPrice.toFixed(2)}p`,
        dailyAvgConsumptionUnit: `${dailyAvgConsumption.toFixed(2)}kWh`,
        yearlyAvgConsumptionUnit: `${yearlyAvgConsumption.toFixed(2)}kWh`,
        yearlySolarEnergyUnit: `${yearlySolarEnergy.toFixed(2)}kWh`,
        yearlyCostSavedUnit: `£${yearlyCostSaved.toFixed(2)}`,
        estSolarPanelCostUnit: `£${estSolarPanelCost.toFixed(2)}`,
        offsetYearsUnit: `${offsetYears.toFixed(2)} years`,
    });

    const updateTariff = ((event:ChangeEvent) => {
        const attr = (event.target as HTMLInputElement).name;
        const val = (event.target as HTMLInputElement).value;
        console.log(`${attr}`);
        console.log(`${val}`);

        switch (attr) {
            case 'tariffPriceUnit': {
                const runUpdateTariff = (() => {
                    const _tariffPrice = (val.charAt(val.length-1)=='p') ? Number(val.substring(0, val.length>1?val.length-1:0)) : Number(val);
                    const _yearlySolarEnergy = +state.yearlySolarEnergyUnit.substring(0, state.yearlySolarEnergyUnit.length-3);
                    const _yearlyCostSaved = _tariffPrice / 100 * _yearlySolarEnergy;
                    const _offsetYears = estSolarPanelCost / _yearlyCostSaved;
                    console.log(`${attr}: ${_tariffPrice}`);
                    setState({ 
                        tariffPriceUnit: `${_tariffPrice.toFixed(2)}p`,
                        dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}`, 
                        yearlyAvgConsumptionUnit: `${state.yearlyAvgConsumptionUnit}`,
                        yearlySolarEnergyUnit: `${state.yearlySolarEnergyUnit}`,
                        yearlyCostSavedUnit: `£${_yearlyCostSaved.toFixed(2)}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${_offsetYears.toFixed(2)} years`,
                    });   
                });
                runUpdateTariff();
                break;
            }
            case 'dailyAvgConsumptionUnit': {
                const runUpdateDailyAvgConsumption = (() => {
                    const _dailyAvgConsumption = (val.indexOf('kWh')==val.length-3) ? Number(val.substring(0, val.length>3?+val.length-3:0)) : Number(val);
                    const _yearlyAvgConsumption = _dailyAvgConsumption * 365;
                    const _yearlySolarEnergy = Number(state.yearlySolarEnergyUnit.substring(0, state.yearlySolarEnergyUnit.length-3));
                    console.log(`${attr}: ${_dailyAvgConsumption}`);
                    const _tariffPrice = +state.tariffPriceUnit.substring(0, state.tariffPriceUnit.length-1);
                    const _estSolarPanelCost = +state.estSolarPanelCostUnit.substring(1, state.estSolarPanelCostUnit.length);
                    let _yearlyCostSaved = 0;
                    if (_yearlyAvgConsumption < _yearlySolarEnergy) {
                        _yearlyCostSaved = _yearlyAvgConsumption * _tariffPrice / 100;
                    } else {
                        _yearlyCostSaved = _yearlySolarEnergy * _tariffPrice / 100;
                    }
                    const _offsetYears = _estSolarPanelCost / _yearlyCostSaved;                    
                    setState({ 
                        tariffPriceUnit: `${state.tariffPriceUnit}`,
                        dailyAvgConsumptionUnit: `${_dailyAvgConsumption.toFixed(2)}kWh`, 
                        yearlyAvgConsumptionUnit: `${_yearlyAvgConsumption.toFixed(2)}kWh`,
                        yearlySolarEnergyUnit: `${state.yearlySolarEnergyUnit}`,
                        yearlyCostSavedUnit: `£${_yearlyCostSaved.toFixed(2)}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${_offsetYears.toFixed(2)} years`,
                    });    
                });
                runUpdateDailyAvgConsumption();
                break;
            }
            case 'yearlySolarEnergyUnit': {
                const runUpdateYearlySolarEnergy = (() => {
                    console.log(`${val}`);
                    const _yearlySolarEnergy = (val.indexOf('kWh')==val.length-3) ? Number(val.substring(0, val.length>3?val.length-3:0)) : Number(val);
                    const _yearlyAvgConsumption = +state.yearlyAvgConsumptionUnit.substring(0, state.yearlyAvgConsumptionUnit.length-3);
                    console.log(`${attr}: ${_yearlySolarEnergy}`);
                    const _tariffPrice = +state.tariffPriceUnit.substring(0, state.tariffPriceUnit.length-1);
                    const _estSolarPanelCost = +state.estSolarPanelCostUnit.substring(1, state.estSolarPanelCostUnit.length);
                    let _yearlyCostSaved = 0;
                    if (_yearlyAvgConsumption < _yearlySolarEnergy) {
                        _yearlyCostSaved = _yearlyAvgConsumption * _tariffPrice / 100;
                    } else {
                        _yearlyCostSaved = _yearlySolarEnergy * _tariffPrice / 100;
                    }
                    const _offsetYears = _estSolarPanelCost / _yearlyCostSaved;
                    setState({ 
                        tariffPriceUnit: `${state.tariffPriceUnit}`,
                        dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}`, 
                        yearlyAvgConsumptionUnit: `${state.yearlyAvgConsumptionUnit}`,
                        yearlySolarEnergyUnit: `${_yearlySolarEnergy.toFixed(2)}kWh`,
                        yearlyCostSavedUnit: `£${_yearlyCostSaved.toFixed(2)}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${_offsetYears.toFixed(2)} years`,
                    });
                });
                runUpdateYearlySolarEnergy();
                break;
            }
            case 'estSolarPanelCostUnit': {
                const runUpdateSolarPanelCostUnit = (() => {
                    const _estSolarPanelCost = (val.indexOf('£')==0) ? Number(val.substring(1, val.length)) : Number(val);
                    const _yearlyCostSaved = Number(state.yearlyCostSavedUnit.substring(1, state.yearlyCostSavedUnit.length));
                    const _offsetYears = _estSolarPanelCost / _yearlyCostSaved;
                    setState({ 
                        tariffPriceUnit: `${state.tariffPriceUnit}`,
                        dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}`, 
                        yearlyAvgConsumptionUnit: `${state.yearlyAvgConsumptionUnit}`,
                        yearlySolarEnergyUnit: `${state.yearlySolarEnergyUnit}`,
                        yearlyCostSavedUnit: `${state.yearlyCostSavedUnit}`,
                        estSolarPanelCostUnit: `£${_estSolarPanelCost.toFixed(2)}`,
                        offsetYearsUnit: `${_offsetYears.toFixed(2)} years`,
                    });
                });
                runUpdateSolarPanelCostUnit();
                
                break;
            }
            default: {
                break;
            }
        }
    });

    const yearlyCostSavingsEvaluation = (() => {
        const _yearlySolarEnergy = Number(state.yearlySolarEnergyUnit.substring(0, state.yearlySolarEnergyUnit.length-3));
        const _yearlyAvgConsumption = Number(state.yearlyAvgConsumptionUnit.substring(0, state.yearlyAvgConsumptionUnit.length-3));
        if (_yearlyAvgConsumption < _yearlySolarEnergy) {
            return `${state.yearlyAvgConsumptionUnit} * ${state.tariffPriceUnit}`;
        } else {
            return `${state.yearlySolarEnergyUnit} * ${state.tariffPriceUnit}`;
        }
    });

    return (
        <div id={modalId} className="modal">
            <div className="modal-content">
                <span id="modalClose" className="close" onClick={() => handleClose(modalId)}>
                    &times;
                </span>
                <div className='row'>
                    <div className="col-12 col-s-12 menu">
                        <table id="expense-tips">
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <h2>How solar panel offset electricity expense?</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Electricity price per kWh (fixed tariff)
                                    </td>
                                    <td>
                                        <input type="text" name="tariffPriceUnit" 
                                        value={state.tariffPriceUnit} onChange={updateTariff}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Daily average consumption
                                    </td>
                                    <td>
                                        <input type="text" name="dailyAvgConsumptionUnit" 
                                        value={state.dailyAvgConsumptionUnit} onChange={updateTariff}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Yearly average consumption
                                    </td>
                                    <td>
                                        {`${state.dailyAvgConsumptionUnit} * 365 = ${state.yearlyAvgConsumptionUnit}`}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Estimated engergy generated by solar panel
                                    </td>
                                    <td>
                                        <input type="text" name="yearlySolarEnergyUnit" 
                                        value={state.yearlySolarEnergyUnit} onChange={updateTariff}/>
                                    </td>
                                </tr>                                   
                                <tr>
                                    <td>
                                        Energy cost saved by solar panel per year
                                    </td>
                                    <td>
                                        {`${yearlyCostSavingsEvaluation()} = ${state.yearlyCostSavedUnit}`}
                                    </td>
                                </tr>   
                                <tr>
                                    <td>
                                        Total cost of solar panel + battery
                                    </td>
                                    <td>
                                        <input type="text" name="estSolarPanelCostUnit"  
                                        value={state.estSolarPanelCostUnit} onChange={updateTariff}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Years to offset cost of solar panel + battery
                                    </td>
                                    <td>
                                        {`${state.estSolarPanelCostUnit} / ${state.yearlyCostSavedUnit}`} <br/>
                                        {` = ${state.offsetYearsUnit}`}
                                    </td>
                                </tr>                                                                                                                                                            
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <b><i>
                                            <p>
                                                * if the price of electricity tariff increases, 
                                                the years to offset solar panel's cost reduces.
                                            </p>

                                            <p>
                                                * if the yearly enegery consumption is lower 
                                                than the annual enegery generated from solar panel, 
                                                the years to offset solar panel's cost increase.
                                            </p>
                                        </i></b>
                                    </th>
                                </tr>                                
                            </thead>
                        </table>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ElectricityExpTips;