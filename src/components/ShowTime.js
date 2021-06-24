import React from "react"
import ReactDOM from "react-dom"

function ShowTime(){
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const sec = date.getSeconds()

    
    
    //const time = new Date().toLocale
    
return(
    <h>The date and time is {date.toDateString()} Hour {hour} Minute {minute} Seconds {sec}</h>
    )
}




export default ShowTime


