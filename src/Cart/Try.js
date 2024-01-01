import React from 'react'
import './Try.css';

export default function Try(props) {
  return (
    <div className='tryBody'>
        <h1>Name: {props.name}</h1>
        <div>
            <img className='tryImg' src={props.img} alt=''/>
        </div>
        <h3>{props.ok}</h3>
        <p>Address: {props.ardd}</p>
    </div>
  )
}
