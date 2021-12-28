import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './ReactJs/Components/Functional/Greet'
// import Welcome from './ReactJs/Components/Class/Welcome'
// import Hello from './ReactJs/Components/JSX/Hello'
// import People from './ReactJs/Props/People'
// import Viewbox from './Viewbox'
// import Employee from './Employee'
// import Viewbox3 from './Viewbox3'
import Employee2 from './Employee2';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Employee2/>
  {/* <people/> */}
      {/* <Welcome/>   
      <Greet/> */}
      {/* <People name="Prateek"/>
      <People name="Akash"/>
      <People name="Anand"/> */}
      {/* <Hello/> */}
      {/* <Viewbox/>

      <Viewbox3/> */}
    </div>
  );
 }
}

export default App;
