import React from 'react'
import Flag from 'react-world-flags';

function Cards({code,title,info,office,companyName }) {
  return (
    <div>
        <div className='card'>
        <Flag code={code.toUpperCase()} style={{height:"50px", width:'50px'}} />
        <h4>{title}</h4>
        <p>{office}</p><br/>
        <p>{companyName}</p>
        <p>{info}</p>
       
        </div>


      
    </div>
  )
}

export default Cards
