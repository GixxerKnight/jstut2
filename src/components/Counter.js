import { render } from "@testing-library/react"
import React from "react"

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
}


render(){
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button> onClick</button>
        </div>
    )
}


export default Counter 