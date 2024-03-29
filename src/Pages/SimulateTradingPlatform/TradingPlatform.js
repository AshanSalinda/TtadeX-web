import React from 'react'
import BasicPage from '../../Components/BasicPage/BasicPage';
import {TradingChart} from "../../Components/SimulateChart/TradingChart";
import SidePanelWithContainer from "../../Components/SidePanel/SidePanelWithContainer";

export default function Portfolio() {

    const Tabs = [
        {label: "Spot", path: "/simulate"},
        {label: "Future", path: "/simulate/future"},
    ];

    return (
        <BasicPage tabs={Tabs}>
            <SidePanelWithContainer
                header='Trade'
                style={{height: '530px'}}
                sidePanel={<div>

                </div>}
            >
                <div style={{width: '50%', height: '5%'}}></div>
                <TradingChart/>
            </SidePanelWithContainer>
        </BasicPage>
    )
}
