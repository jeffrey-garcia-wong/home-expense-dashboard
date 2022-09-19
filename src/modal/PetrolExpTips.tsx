import { ChangeEvent, MouseEvent, useState } from 'react';
import './ExpTips.css';

const PetrolExpTips = ((props:any) => {
    const { modalId } = props;

    const handleClose = ((modalId:string) => {
        const modalPage = document.getElementById(modalId) as HTMLElement|null;
        // console.log(modalPage);
        if (modalPage != null) {
            modalPage.style.display = "none";
        }
    });

    const fuelConsumptionMpg = 28.5;
    const LITRES_PER_GALLON = 4.54609;
    const fuelConsumptionMpl = Number((fuelConsumptionMpg / LITRES_PER_GALLON).toFixed(3));
    const fuelConsumptionLpm = Number((1 / fuelConsumptionMpl).toFixed(3));
    const petrolCost = 1.625;
    const milesToTravel = 1;
    const totalPetrolCost = Number((fuelConsumptionLpm * milesToTravel * petrolCost).toFixed(3));

    const [state, setState] = useState({
        fuelConsumptionMpgUnit: `${fuelConsumptionMpg} MPG`,
        fuelConsumptionMplUnit: `${fuelConsumptionMpl} Miles/Litre`,
        fuleConsumptionLpmUnit: `${fuelConsumptionLpm} Litres/Miles`,
        petrolCostUnit: `£ ${petrolCost}`,
        milesToTravelUnit: `${milesToTravel} Mile(s)`,
        totalPriceCostUnit: `£ ${totalPetrolCost}`
    });

    const updateFuelConsumption = ((event:ChangeEvent) => {
        const attr = (event.target as HTMLInputElement).name;
        const val = (event.target as HTMLInputElement).value;
        console.log(`${attr}`);

        switch (attr) {
            case 'fuelConsumptionMpgUnit':
                const runUpdateFuelConsumption = (() => {
                    const _fuelConsumptionMpg = (val.indexOf(' MPG')==val.length-4) ? val.substring(0, val.length>4?val.length-4:0) : val;
                    console.log(`${attr}: ${_fuelConsumptionMpg}`);
                    const _fuelConsumptionMpl = Number((Number(_fuelConsumptionMpg) / LITRES_PER_GALLON).toFixed(3));
                    const _fuleConsumptionLpm = Number((1 / _fuelConsumptionMpl).toFixed(3));
                    const _pertrolCostUnit = state.petrolCostUnit.substring(2, state.petrolCostUnit.length);
                    const _milesToTravel = state.milesToTravelUnit.substring(0, state.milesToTravelUnit.length-8);
                    const _totalPetrolCost = Number(_fuleConsumptionLpm * Number(_pertrolCostUnit) * Number(_milesToTravel)).toFixed(3);
                    setState({
                        fuelConsumptionMpgUnit: `${_fuelConsumptionMpg} MPG`,
                        fuelConsumptionMplUnit: `${_fuelConsumptionMpl} Miles/Litre`,
                        fuleConsumptionLpmUnit: `${_fuleConsumptionLpm} Litres/Miles`,
                        petrolCostUnit: `${state.petrolCostUnit}`,
                        milesToTravelUnit: `${state.milesToTravelUnit}`,
                        totalPriceCostUnit: `£ ${_totalPetrolCost}`,
                    })
                });
                runUpdateFuelConsumption();
                break;

            case 'petrolCostUnit':
                const runUpdatePetrolCost = (() => {
                    const _pertrolCostUnit = (val.indexOf('£ ')==0) ? val.substring(2, val.length) : val;
                    console.log(`${attr}: ${_pertrolCostUnit}`);
                    const _fuleConsumptionLpm = state.fuleConsumptionLpmUnit.substring(0, state.fuleConsumptionLpmUnit.length-13);
                    const _milesToTravel = state.milesToTravelUnit.substring(0, state.milesToTravelUnit.length-8);
                    const _totalPetrolCost = Number((Number(_fuleConsumptionLpm) * Number(_pertrolCostUnit) * Number(_milesToTravel)).toFixed(3));
                    setState({
                        fuelConsumptionMpgUnit: `${state.fuelConsumptionMpgUnit}`,
                        fuelConsumptionMplUnit: `${state.fuelConsumptionMplUnit}`,
                        fuleConsumptionLpmUnit: `${state.fuleConsumptionLpmUnit}`,
                        petrolCostUnit: `£ ${_pertrolCostUnit}`,
                        milesToTravelUnit: `${state.milesToTravelUnit}`,
                        totalPriceCostUnit: `£ ${_totalPetrolCost}`,
                    });
                });
                runUpdatePetrolCost();
                break;

            case 'milesToTravel':
                const runUpdateMilesToTravel = (() => {
                    const _milesToTravel = (val.indexOf(' Mile(s)')==val.length-8) ? val.substring(0, val.length-8) : val;
                    console.log(`${attr}: ${_milesToTravel}`);
                    const _fuleConsumptionLpm = state.fuleConsumptionLpmUnit.substring(0, state.fuleConsumptionLpmUnit.length-13);
                    const _pertrolCostUnit = state.petrolCostUnit.substring(2, state.petrolCostUnit.length);
                    const _totalPetrolCost = Number((Number(_fuleConsumptionLpm) * Number(_milesToTravel) * Number(_pertrolCostUnit)).toFixed(3));
                    setState({
                        fuelConsumptionMpgUnit: `${state.fuelConsumptionMpgUnit}`,
                        fuelConsumptionMplUnit: `${state.fuelConsumptionMplUnit}`,
                        fuleConsumptionLpmUnit: `${state.fuleConsumptionLpmUnit}`,
                        petrolCostUnit: `${state.petrolCostUnit}`,
                        milesToTravelUnit: `${_milesToTravel} Mile(s)`,
                        totalPriceCostUnit: `£ ${_totalPetrolCost}`,
                    });
                });
                runUpdateMilesToTravel();                 
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
                                        <input type="text" name="fuelConsumptionMpgUnit" 
                                        value={state.fuelConsumptionMpgUnit} onChange={updateFuelConsumption}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Distance travelled per Litre of petrol (Miles per Litre)
                                    </td>
                                    <td>
                                        {state.fuelConsumptionMpgUnit + ' / ' + LITRES_PER_GALLON + 'L = ' + state.fuelConsumptionMplUnit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Volume of petrol required to travel per Mile (Litres per Mile)
                                    </td>
                                    <td>
                                        {1 + ' / ' + state.fuelConsumptionMplUnit + ' = ' + state.fuleConsumptionLpmUnit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Price of Petrol- £ per Litre (£/L)
                                    </td>
                                    <td>
                                        <input type="text" name="petrolCostUnit" 
                                        value={state.petrolCostUnit} onChange={updateFuelConsumption} />                          
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Distance to travel (Miles)
                                    </td>
                                    <td>
                                        <input type="text" name="milesToTravel"
                                        value={state.milesToTravelUnit} onChange={updateFuelConsumption} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Total petrol cost (£)
                                    </td>
                                    <td>
                                        {state.fuleConsumptionLpmUnit + ' * ' + state.milesToTravelUnit + ' * ' + state.petrolCostUnit + ' = ' + state.totalPriceCostUnit}
                                    </td>                                    
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <p>
                                            <b><i>
                                                * If the MPG increases or the petrol prices decreases, 
                                                total petrol cost reduces.
                                            </i></b>
                                        </p>
                                        <ul>
                                            <li><u>Round Trip Journey Distance</u></li>
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
});

export default PetrolExpTips;