import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PlaceBooking.css'

const PlaceBooking = () => {
    const { id } = useParams();
    const [selected, setSelected] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/placeBooking/${id}`)
            .then(res => res.json())
            .then(result => setSelected(result))

    }, [])

    const handleAddToCart =(id)=>{
        axios.post(`http://localhost:5000/addedItem/${id}`)
        
        .then(result=>{
            if(result.statusText === "OK"){
                alert("Booking Successful")
            }
        })
       
    }

    return (
        <div>
            <h3>Your Choice :</h3>
            <h1 className="highlight"> {selected.name}</h1>
            <div className="selected-container">
                <div className="selected-card">
                    <div>
                        <img className="img-fluid" src={selected.img} alt="" />
                    </div>
                    <div>
                        <p> {selected.description}</p>
                            <button onClick={()=>handleAddToCart(selected._id)} className="btn btn-warning">Add To Cart </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceBooking;