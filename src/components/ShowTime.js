import React from "react"
import ReactDOM from "react-dom"

function ShowTime(){
    const date = new Date()
    let i = 4
    
    //const time = new Date().toLocale
    
return(
    <h1>The date and time is {date.toDateString()} </h1>
    )
}




export default ShowTime


