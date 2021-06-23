import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import MyCheckList from"./components/MyCheckList"
import DumpsterFire from './components/DumpsterFire';
import ShowTime from "./components/ShowTime"

function MyOrderedList(){
  return(
    <div>
      <ul>
      <li>car</li>
      <li>boat</li>
      <li>airplane</li>
    </ul>
  </div>
  )
}

function MyInfo(){
return(
  <div>
  <h1>My name here</h1>
  <p>Stuff about my self here</p>
  <ol>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ol>
  </div>
 )
}


function PassJava(){
  const firstname = "Jeff"
  const lastname = "Carrick"
  return(
    <div>
      <h>Hello this text is HTML. The name is in a curly brace. {"{}"} {firstname +" " + lastname}</h>
      <p>Or you can do this {`${firstname} ${lastname}`} with more html after it</p>
    </div>
  )
}





ReactDOM.render(

<div>
<ShowTime />
<MyInfo />
<MyOrderedList /> 
<PassJava />
<MyCheckList />
<DumpsterFire />
</div>,
 document.getElementById('root'))


