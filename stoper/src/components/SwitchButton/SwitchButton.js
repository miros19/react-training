import React, { Component } from "react";
import "./SwitchButton.css";

class SwitchButton extends Component{

    render(){
        return(
            <button className="button" onClick={this.props.click}>{this.props.id}</button>
        )
    }
}

export default SwitchButton;