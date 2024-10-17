import React from "react";

class CalculatorInput extends React.Component{
    constructor(props){
        super(props);
        this.inputChg = this.inputChg.bind(this);
    }
    
    inputChg(event){
        this.props.distanceChgFunc(event.target.value);
        // this.setState({distance:event.target.value});
    }
    render() {
        return (
            <>
                <label>
                    Enter the Distance in {this.props.unit} : <input type="number" value={this.props.distance} onChange={this.inputChg}/> <br/> <br/>
                </label>
            </>
        );
    }
}

export default CalculatorInput;