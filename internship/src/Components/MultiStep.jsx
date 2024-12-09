import React from 'react'
import { Steps } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './component.css'
function MultiStep() {
    
    const customDot=(dot,{status})=>{
    
        return status==='finish' ? (
          <div className='custom-tick'>
             <CheckOutlined />


          </div>
           
        ): (dot);
    };
    
  return (
    <div>
        <div className='step-container'>
        <Steps 
        size='small'
        current={1}
        labelPlacement='vertical'
        progressDot={customDot}
        items={[
            {
              title: 'Business Type',
              status: 'finish', 
            },
            {
              title: 'Business Details',
              status: 'process', 
            },
            {
              title: 'Authorized Representative',
            },
            {
              title: 'Business Owner',
            },
            {
              title: 'Company Directors',
            },
            {
              title: 'Support Information',
            },
            {
              title: 'Add Details',
            },
            {
              title: 'Complete Registration',
            },
          ]}
        />



        </div>
      
    </div>
  )
}

export default MultiStep
