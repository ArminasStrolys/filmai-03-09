import React from 'react'

export default function Movie(props) {
  return (
    <div className='card' style={{width:"18rem"}}>
        {/* <img src={props.year} className="card-img-top" alt="" /> */}
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <div className='card-text'>
                <ul>
                    {props.title}
                    <li>{props.year}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
