import React from 'react'
import './Viewboxstyle.css'

class Viewbox extends React.Component {
    
        state = {
            divcontainer:false,
        }
        render()
        {
            var change = () => {
                this.setState({divcontainer:!this.state.divcontainer});
            }

            const x=this.state.divcontainer;
        return (
            <div>       
            <h1 className='header'>Styling Functional Component and Class Component</h1>
           <button className='classComp' onClick={change} >{x?'Using Class Comp.':'Using Class Comp.'}</button>
           {
               x &&( <div className='box1'><span><h2>This is created using Class component</h2></span>
                                          <p>This is done using external CSS</p>
                                          <p>This is done using inline CSS</p>
                    </div>)
           }
          
       </div>
       
        );
        
    }
}





export default Viewbox;