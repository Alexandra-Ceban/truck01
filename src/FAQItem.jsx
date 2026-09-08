import {useState} from 'react';
import './FAQItem.css'

const FAQItem=(props)=>{
 const [open, setOpen]= useState(false);
    return(
      <div className="faqcard">
      <div onClick={()=>setOpen(!open)}   className='question'>
        <h3 >{props.question}</h3>
        <p>{open ? '▲': '▼'}</p>
        </div>
        
        {open && <p>{props.answer}</p>}
        </div>

    

    );
};
export default FAQItem;