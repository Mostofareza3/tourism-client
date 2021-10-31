import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './PlaceBooking.css'
import useFirebase from '../../hooks/useFirebase'

const PlaceBooking = () => {
    const { id } = useParams();
    const { user } = useFirebase();
    const [selected, setSelected] = useState([])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        selected.email = user?.email;
        axios.post(`http://localhost:5000/addedItem`, selected)

            .then(result => {
                console.log(result)
                if (result.statusText === "OK") {
                    alert("Booking Successful")
                }
                else{
                    alert('Already Added.')
                }
            })
    };


  
    useEffect(() => {
        fetch(`http://localhost:5000/placeBooking/${id}`)
            .then(res => res.json())
            .then(result => setSelected(result))

    }, [])

   

    return (
        <div>
            <h3>Your Choice :</h3>
            <h1 className="highlight"> {selected.name}</h1>
            <div className="selected-container row">
                <div className="selected-card col-md-6">
                    <div>
                        <img className="img-fluid" src={selected.img} alt="" />
                    </div>
                    <div>
                        <p> {selected.description}</p>

                    </div>
                   
                </div>
                <div className="col-md-6 place-booking-form">
                    <h3>Confirm Your Order</h3>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input required defaultValue={selected.name} {...register("name")} />
                        <input required defaultValue={user?.email} {...register("email")} />
                        <input required placeholder="Your Phone Number" {...register("phone")} />
                        
                        <br />
                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceBooking;