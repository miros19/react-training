import React, { Component, Fragment } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import "./TimeKeeper.css"

class TimeKeeper extends Component{

    state = {
        time : 0.0,
        active: false,
        button: "Start"
    }

    handleStart = () =>{
        if (this.state.active) {
            clearInterval(this.interval)
        } else {
            this.interval = setInterval(() => this.addMiliSecond(), 10)
        }
        this.setState({
            active: !this.state.active,
            button: !this.state.active ? "Stop":"Start"
        })
    }
    
    handleReset = () =>{
        clearInterval(this.interval)
        this.setState({
            active: false,
            button: "Start",
            time: 0.0
        })
    }
    

    addMiliSecond = () => {
        this.setState({
            time: this.state.time + 0.01
        })
    }

    render(){
        return(
            <Fragment>
                <p>{Math.round(this.state.time*100)/100}</p>
                <div className="buttons">
                    <SwitchButton id = {this.state.button} click = {this.handleStart} active = {this.state.active}/>
                    <SwitchButton id = {"Reset"} click = {this.handleReset}/>
                </div>
            </Fragment>
        )
    }
}

export default TimeKeeper;