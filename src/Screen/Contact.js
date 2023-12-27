import React from 'react'
import '../Style/Contact.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  
  return (
    <div className='contactBody'>
      <div>
      <h2>Page A</h2>
      <Link to="/About-Us">Go to Page B with prop value 1</Link>
      <br />
      <Link to="/About-Us">Go to Page B with prop value 2</Link>
    </div>
    </div>
  )
}
