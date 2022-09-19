import { MouseEvent, ChangeEvent, useState } from 'react';
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

    const tariffPrice:number = 26.19;
    const dailyAvgConsumption:number = 8;
    const yearlyAvgConsumption:number = dailyAvgConsumption * 365;
    const yearlySolarEnergy:number = 2641;
    const yearlyCostSaved:number = Number((yearlySolarEnergy * tariffPrice / 100).toFixed(3));
    const estSolarPanelCost:number = 8306;
    const offsetYears:number = Number((estSolarPanelCost / yearlyCostSaved).toFixed(3));

    const [state, setState] = useState({ 
        tariffPriceUnit: `${tariffPrice}p`,
        dailyAvgConsumptionUnit: `${dailyAvgConsumption}kWh`,
        yearlyAvgConsumptionUnit: `${yearlyAvgConsumption}kWh`,
        yearlySolarEnergyUnit: `${yearlySolarEnergy}kWh`,
        yearlyCostSavedUnit: `£${yearlyCostSaved}`,
        estSolarPanelCostUnit: `£${estSolarPanelCost}`,
        offsetYearsUnit: `${offsetYears} years`,
    });

    const updateTariff = ((event:ChangeEvent) => {
        const attr = (event.target as HTMLInputElement).name;
        const val = (event.target as HTMLInputElement).value;
        console.log(`${attr}`);

        switch (attr) {
            case 'tariffPriceUnit': 
                const runUpdateTariff = (() => {
                    const _tariffPrice = (val.charAt(val.length-1)=='p') ? +val.substring(0, val.length>1?val.length-1:0) : +val;
                    const _yearlySolarEnergy = +state.yearlySolarEnergyUnit.substring(0, state.yearlySolarEnergyUnit.length-3);
                    const _yearlyCostSaved = Number((_tariffPrice / 100 * _yearlySolarEnergy).toFixed(3));
                    const _offsetYears = Number((estSolarPanelCost / _yearlyCostSaved).toFixed(3));
                    console.log(`${attr}: ${_tariffPrice}`);
                    setState({ 
                        tariffPriceUnit: `${_tariffPrice}p`,
                        dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}`, 
                        yearlyAvgConsumptionUnit: `${state.yearlyAvgConsumptionUnit}`,
                        yearlySolarEnergyUnit: `${state.yearlySolarEnergyUnit}`,
                        yearlyCostSavedUnit: `£${_yearlyCostSaved}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${_offsetYears} years`,
                    });   
                });
                runUpdateTariff();
                break;

            case 'dailyAvgConsumptionUnit': 
                const runUpdateDailyAvgConsumption = (() => {
                    const _dailyAvgConsumption = (val.indexOf('kWh')==val.length-3) ? +val.substring(0, val.length>3?val.length-3:0) : +val;
                    const _yearlyAvgConsumption = Number((_dailyAvgConsumption * 365).toFixed(3));
                    console.log(`${attr}: ${_dailyAvgConsumption}`);
                    setState({ 
                        tariffPriceUnit: `${state.tariffPriceUnit}`,
                        dailyAvgConsumptionUnit: `${_dailyAvgConsumption}kWh`, 
                        yearlyAvgConsumptionUnit: `${_yearlyAvgConsumption}kWh`,
                        yearlySolarEnergyUnit: `${state.yearlySolarEnergyUnit}`,
                        yearlyCostSavedUnit: `${state.yearlyCostSavedUnit}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${state.offsetYearsUnit}`,
                    });    
                });
                runUpdateDailyAvgConsumption();
                break;

            case 'yearlySolarEnergyUnit':
                const runUpdateYearlySolarEnergy = (() => {
                    const _yearlySolarEnergy = (val.indexOf('kWh')==val.length-3) ? +val.substring(0, val.length>3?val.length-3:0) : +val;
                    const _tariffPrice = +state.tariffPriceUnit.substring(0, state.tariffPriceUnit.length-1);
                    const _estSolarPanelCost = +state.estSolarPanelCostUnit.substring(1, state.estSolarPanelCostUnit.length);
                    console.log(`${attr}: ${_yearlySolarEnergy}`);
                    const _yearlyCostSaved = Number((_yearlySolarEnergy * _tariffPrice / 100).toFixed(3));
                    const _offsetYears = Number((_estSolarPanelCost / _yearlyCostSaved).toFixed(3));
                    setState({ 
                        tariffPriceUnit: `${state.tariffPriceUnit}`,
                        dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}`, 
                        yearlyAvgConsumptionUnit: `${state.yearlyAvgConsumptionUnit}`,
                        yearlySolarEnergyUnit: `${_yearlySolarEnergy}kWh`,
                        yearlyCostSavedUnit: `£${_yearlyCostSaved}`,
                        estSolarPanelCostUnit: `${state.estSolarPanelCostUnit}`,
                        offsetYearsUnit: `${_offsetYears} years`,
                    });
                });
                runUpdateYearlySolarEnergy();
                break;

            default:
                break;
        }
    });

    return (
        <div id={modalId} className="modal">
            <div className="modal-content">
                <span id="modalClose" className="close" onClick={(ev:MouseEvent) => handleClose(modalId)}>
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
                                        Electricity price per kWh
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
                                    {state.dailyAvgConsumptionUnit + ' * 365 = ' + state.yearlyAvgConsumptionUnit}
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
                                        {state.yearlySolarEnergyUnit + ' * ' + state.tariffPriceUnit} <br/>
                                        {' = ' + state.yearlyCostSavedUnit}
                                    </td>
                                </tr>   
                                <tr>
                                    <td>
                                        Total cost of solar panel + battery
                                    </td>
                                    <td>
                                        <input type="text" name="yearlyCostSavedUnit" disabled 
                                        value={state.estSolarPanelCostUnit}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Years to offset cost of solar panel + battery
                                    </td>
                                    <td>
                                        {state.estSolarPanelCostUnit + ' / ' + state.yearlyCostSavedUnit} <br/>
                                        {' = ' + state.offsetYearsUnit}
                                    </td>
                                </tr>                                                                                                                                                            
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <b><i>
                                            * If the price of electricity tariff increases, 
                                            the years to offset solar panel's cost reduces.
                                        </i></b>
                                    </th>
                                </tr>                                    
                            </thead>
                        </table>
                        {/* <h2></h2><br/>
                         */}
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ElectricityExpTips;