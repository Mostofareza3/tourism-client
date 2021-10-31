import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {

    const [myOrders, setMyOrder] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useFirebase();
    const email = user.email;
    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(result => {
                setMyOrder(result)
            })
    }, [isDeleted])
    const handleDelete = () => {
        window.confirm('Do you want to delete?')
        fetch(`http://localhost:5000/deleteOrder/${email}`, {
            method: "Delete",
            headers: { "content-type": "application/json" },

        })
            .then(res => res.json())
            .then(result => setIsDeleted(result.acknowledged))

    }

    return (
        <div>
            <h2>this is my orders item page</h2>
            <div className="card-container">
                {
                    myOrders.map(singlePackage =>
                        <div key={singlePackage._id} className="single-card">
                            <div>
                                <img src={singlePackage.img} alt="" />
                            </div>
                            <div className="card-desc">
                                <div className="d-flex justify-content-around">
                                    <small>Price: ${singlePackage.price}per person</small>
                                    <small>{singlePackage.time}</small>
                                </div>
                                <h5 className="highlight">{singlePackage.name}</h5>

                                <p>{singlePackage.description}</p>
                                <button onClick={handleDelete} className="btn btn-danger">Delete</button>


                            </div>

                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default MyOrders;