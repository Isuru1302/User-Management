import React,{Component} from "react";
import '../App.css';

class CurrentTime extends Component{
    state = {
        date:new Date()
    };

    updateTiMe(){
        setInterval(()=>{
            this.setState({date:new Date()});
        },1000);
    }

    render() {
        return(
            <div>
            <span className="date-time">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                {this.updateTiMe()}
            </div>
        )
    }
}

export default CurrentTime;
