import React from "react"
import ReactDOM from "react-dom"
import MyImage from "../assets/img/truckfire.gif"

function DumpsterFire(){
    return(
        <div>
            <h>Image Load test!!!!!!!</h>
            <div>
            <img src={MyImage} alt="image not found" />
            </div>
        </div>

    )
}


export default DumpsterFire 

