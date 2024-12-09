import React from 'react';
import MultiStep from '../Components/MultiStep';
import FormComp from '../Components/FormComp';
function Formpage() {

  
  return (
    <div>
      <div className='Form-page'>
      <h1 className='form-heading'>Multi-Step Process Form Assignment</h1>
      <p className='form-p'>After-OTP</p>
      <MultiStep/>
      <FormComp/>

      </div>
      
    
        
    </div>
  );
}

export default Formpage;
