import React from 'react'
import Col from 'react-bootstrap/Col';
import './Service.css'


const Service = ({ item }) => {
    return (

        < Col lg={4}>
            <div className="singele-service">
                <img src={item.img} alt="" className='w-100' />
                <div className='text-area'>
                    <h3>{item.name}</h3>
                    <h4>Price: ${item.price} </h4>
                    <p>{item.description}</p>
                    <button>Book Now</button>
                </div>
            </div>
        </Col >
    )
}

export default Service
