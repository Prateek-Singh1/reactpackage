import React, { useState } from "react";
import './Viewboxstyle.css'

function Viewbox3() {

  const [showText, setShowText] = useState(false);
  const onClic = () => {
    if (showText===false){
      setShowText(true);
    }
    else {
      setShowText(false);
    }
  }
  return (
    
    <div>
      <button className="funcComp" onClick={onClic}>Using Functional comp.</button>
      {showText ? <Text/> : null}
    </div>
  );
}
const Text = () => <div  className='box2'><span><h2>This is created using Functional component</h2></span>
                                          <p>This is done using external CSS</p>
                                          <p>This is done using inline CSS</p>
                   </div>



export default Viewbox3