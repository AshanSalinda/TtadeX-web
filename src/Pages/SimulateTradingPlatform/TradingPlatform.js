import React from 'react'
import BasicPage from '../../Components/BasicPage/BasicPage';
import {TradingChart} from "../../Components/SimulateChart/TradingChart";

export default function Portfolio() {

    const Tabs = [
        {label: "Spot", path: "/simulate"},
        {label: "Future", path: "/simulate/future"},
    ];

    return (
        <BasicPage tabs={Tabs}>
            <div style={{width:'50%',height:'20%'}}></div>
            <TradingChart/>
        </BasicPage>
    )
}