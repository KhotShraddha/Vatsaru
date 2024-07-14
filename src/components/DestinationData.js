import { Component } from "react";
import "./DestinationStyles.css";
import Rajgad1img from "../assets/rajgad 2.jpg";
import Rajgad2img from "../assets/Rajgad_Fort_in_Pune,_Maharashtra.jpg";


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text} </p>
            </div>
<div className="image">
<img src={this.props.img1} alt="RajgadImage" />
<img src={this.props.img2} alt="RajgadImage" />

</div>
        </div>
        )
    }
}export default DestinationData;