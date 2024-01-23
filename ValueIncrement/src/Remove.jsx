import { useState } from "react";



function Remove({Counter,setCounter}){
    // let [counter, setCounter] = useState(0)
    const removeValue =()=>{
        // // counter =counter-1
        // setCounter(Counter-1)
        // // console.log("clicked", counter)
         if (Counter > 0) {
            setCounter(Counter - 1);
          }
          else {
            console.log("Value cannot be less than 0");
          }
    }

    return(
        <>
        {/* <h1>{counter} </h1> */}
        <button onClick={removeValue}>Decrement</button>
        </>
    )
}

export default Remove
