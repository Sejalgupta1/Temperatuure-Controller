import React,{useState} from "react";
import "./temp.css";

const Temperature =() =>{ 
    const [temp,setTemp] = useState(10);
    const[tempclr,setTempClr] = useState("cold");

    const increaseTemp = ( )=>{
      if (temp === 30) return;
      const newTemp = temp+1;
      if(newTemp >= 15){
        setTempClr('hot')
      }
      setTemp(newTemp);
    };

    const decreaseTemp = ( )=>{
       if (temp === 0) return;
      const newTemp = temp - 1;
      if(newTemp < 15){
        setTempClr('cold')
      }
      setTemp(newTemp);
    };
    
    
    return(
    <div>
   <div className="app-container">
  <div className="temp-display-container">
    <div className={`temp-display ${tempclr}`}> {temp}°C</div>
  </div>
     <div className="btn-container">
       <button onClick={()=> increaseTemp()}>+</button>
       <button onClick={() => decreaseTemp()}>-</button>
     </div>  
   </div>
    </div>
      )
}
export default Temperature;