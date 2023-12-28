import React, { useState } from 'react';
import '../Style/AboutUs.css';

export default function AboutUs() {
 

  
  return (
    <div className='aboutBody'>
      <div className='aboutBox'>
        <div className='aboutBox-1'>
          <div className='aboutBox-2'>Name:</div>
          <div className='aboutBox-3'>
            <input className='aboutBox-input' placeholder='Name'/>
          </div>
        </div>

        <div className='aboutBox-1'>
          <div className='aboutBox-2'>Email:</div>
          <div className='aboutBox-3'>Tasnim@ggg.com</div>
        </div>

        <div className='aboutBox-1'>
          <div className='aboutBox-2'>Phone:</div>
          <div className='aboutBox-3'>34567898765</div>
        </div>

        <div className='aboutBox-1'>
          <div className='aboutBox-4'>Text:</div>
          <div className='aboutBox-5'>34hyghg765</div>
        </div>

        <button className='aboutBox-Button'>Submit</button>
      </div>
    </div>
  )
}
