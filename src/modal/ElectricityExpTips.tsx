import { ChangeEvent, useState } from 'react';
import './ElectricityExpTips.css';

const ElectricityExpTips = () => {
    (() => {
        const modalPage = document.getElementsByClassName('modal')[0] as HTMLElement|null;
        const modalClose = document.getElementById("modalClose") as HTMLElement|null;
        if (modalClose != null) {
            modalClose.onclick = ((ev:MouseEvent) => {
                if (modalPage != null) {
                    modalPage.style.display = "none";
                } else {
                    console.error(`something went wrong`)
                }
            });
        }
    })();

    const tariffPrice:number = 26.19;
    const dailyAvgConsumption:number = 8;
    const yearlyAvgConsumption:number = dailyAvgConsumption * 365;
    const yearlySolarEnergy:number = 2641;
    const yearlyCostSaved:number = yearlySolarEnergy * tariffPrice / 100;
    const estSolarPanelCost:number = 8306;
    const offsetYears:number = estSolarPanelCost / yearlyCostSaved;
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
                    let _tariffPrice = (val.charAt(val.length-1)=='p') ? +val.substring(0, val.length>1?val.length-1:0) : +val;
                    const _yearlySolarEnergy = +state.yearlySolarEnergyUnit.substring(0, state.yearlySolarEnergyUnit.length-3);
                    const _yearlyCostSaved = _tariffPrice / 100 * _yearlySolarEnergy;
                    const _offsetYears = estSolarPanelCost / _yearlyCostSaved;
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
                    const _yearlyAvgConsumption = _dailyAvgConsumption * 365;
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
                    const _yearlyCostSaved = _yearlySolarEnergy * _tariffPrice / 100;
                    const _offsetYears = _estSolarPanelCost / _yearlyCostSaved;
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

        // 
        // 
        // 
        // setState({ 
        //     tariffPriceUnit: `${_tariffPrice}p`,
        //     dailyAvgConsumptionUnit: `${state.dailyAvgConsumptionUnit}kWh`, 
        // });
    });

    return (
        <div className="modal">
            <div className="modal-content">
                <span id="modalClose" className="close">&times;</span>
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
                                <tr>
                                    <td colSpan={2}>
                                        <b><i>
                                            * If the price of electricity tariff increases, 
                                            the years to offset solar panel's cost reduces.
                                        </i></b>
                                    </td>
                                </tr>                                                                                                
                            </tbody>
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