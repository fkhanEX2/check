import React from 'react';

function Result(props) {
    if(props.distance <= 1000){
        return (<h2>{props.distance} is walking Distance.</h2>);
    }else{
        return (<h2>{props.distance} is too much.</h2>);
    }
}

export default Result;