import React,{useState}from "react";

function Toggle() {
  // we are setting the ntial  state as false becoz the button needs to be off when first rendered.
  const [isOn,setIsOn] =useState(false);

  // we must call a setter function to update our state variable 
  function handleClick(){
    setIsOn((isOn)=> !isOn)
  }

  // We can use the same isOn state variable,along with some conditional rendering to get the button to display the correct border color.
  const color = isOn? "red" : "white"

  // true should display "ON" and false should display "OFF"
  // We also need to determine what triggers the update.
  return <button style={{background:color}} onClick={handleClick}>{isOn ? "ON": "OFF"}</button>;
  
}

export default Toggle;
