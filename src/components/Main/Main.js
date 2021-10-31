import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Main.css'

const Main = () => {
    const {signInUsingGoogle} = useFirebase();
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(result => setPackages(result))

    }, [])
    return (
        <div className="mt-5">
            <h2 className="heading">Select Your Best Package <br /> For Your Travel </h2>

            <div className="card-container">
                {
                    packages.map(singlePackage =>
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

                                <p>{singlePackage.description.slice(0, 100)}</p>
                                <Link to={`/placeBooking/${singlePackage._id}`}>
                                <button className="btn btn-success">Book Now</button>
                                </Link>

                            </div>

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Main;