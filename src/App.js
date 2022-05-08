import React, { Component } from 'react';
import Basic from './components/Basic';
import Deletes from './components/Deletes';
import Saves from './components/Saves';


class App extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <Basic />
                <div className="boxes">
                  <Saves /> 
                  <Deletes />   
                </div> 
            </div>
          );
    }
}
 
export default App;