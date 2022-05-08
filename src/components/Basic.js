import React, { Component } from 'react';
import Saves from './Saves';
class Basic extends Component {
    
    

    

   

    

    
    render() { 
        return (  
            <div className="basic">
               <div className="basic-header">
                   <h1>What do you have work? Write</h1>
               </div>
               <div className="basic-body">
                   <input type="text" 
                   name='text'
                   autoComplete="off"
                   />
                   <button type="button"
                   className='basic-btn'>✔</button>
               </div>
            </div>
        );
    }
}
 
export default Basic;