import React from "react";
import CalculatorInput from "./CalculatorInput";
import Result from "./Result";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            distance : '',
            unit: 'Meters'
        }
        this.meterChange = this.meterChange.bind(this);
        this.KiloMeterChange = this.KiloMeterChange.bind(this);
    }
    meterChange(distance){
        this.setState({distance, unit:'Meters'});
    }
    KiloMeterChange(distance){
        this.setState({distance, unit:'KiloMeters'});
    }
    render(){
        let meterValue, kmValue;
        if(this.state.unit === 'Meters'){
            meterValue = this.state.distance;
            kmValue = meterValue / 1000;
        }
        if(this.state.unit === 'Meters'){
            kmValue = this.state.distance;
            meterValue = kmValue / 1000;
        }
        return(
            <>
                <CalculatorInput unit="Meter" distance={meterValue} distanceChgFunc={this.meterChange}/>
                <CalculatorInput unit="KiloMeter" distance={kmValue} distanceChgFunc={this.KiloMeterChange}/>
                <Result distance="1000"/>
            </>
        );
    }
}

export default Calculator;