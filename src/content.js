import React from 'react'
import {useState} from 'react';
import './content.css'
import FAQ from './FAQ';


const Content = () => {
    
  return (
     <main>
      <section className='ourmission'>
         <img src="https://images.pexels.com/photos/33256290/pexels-photo-33256290.jpeg" className='imagecar'></img>
         <div className='mission'>
            
            <h1>Load Smarter,</h1>
            <h1 className='gold'>Ship Better.</h1>
            <h3>We turn complex loading decisions into simple, 
           optimized solutions, helping every shipment use space more intelligently.</h3>
           <a><button>Get started →</button></a>
         </div>

      </section>


        <section className='detailscar'>
          <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="circle circle3"></div>

        
            
            <div className='detail-container'>
            <h2>Enter your vehicle's key measurements:</h2>
         <div className='label1'>
            
         <label htmlFor='Length'>Overall Length (inches):</label>
         <input type="number"  id="Length"  placeholder=' e.g. 235.5'></input>
           </div>

            <div className='label1'>
         
         <label htmlFor='Capacity'>Maximum Capacity (lbs):</label>
         <input type="number"  id="Capacity"  placeholder='e.g. 3,600 '></input>
           </div>

            <div className='label1'>
           
         <label htmlFor='Width'>Overall Width (inches):</label>
         <input type="number"  id="Width"  placeholder='e.g. 97.4 '></input>
           </div>
          
          
            <div className='label1'>
          
         <label htmlFor='Height'>Overall Height (inches):</label>
         <input type="number"  id="Height"  placeholder=' e.g. 100.7'></input>
           </div>
         </div>
            {/* the button also needs link to next page */}
        <div className='buttonnext'>
        
         <a>Next</a>
         </div>

        </section>


        <FAQ />
       
      
        
     </main>
  )
}

export default Content
