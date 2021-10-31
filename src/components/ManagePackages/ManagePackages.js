import React, { useEffect, useState } from 'react';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);
    const [isDelete, setIsdelete] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(result => setPackages(result))

    }, [isDelete]);

    const handleDelete = (id) => {
        window.confirm("Are you sure to delete this package?")
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
        .then(res=>res.json())
        .then(result=>{
            setIsdelete(result.acknowledged)
            if(result.acknowledged){
                alert("delete successful")
            }
        })
    }
    return (
        <div className="mt-5">
            <h2 className="heading">Manage All available packages</h2>

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
                                    <small><i className="fas fa-clock"></i>{singlePackage.time}</small>
                                </div>
                                <h5 className="highlight">{singlePackage.name}</h5>

                                <p>{singlePackage.description}</p>

                                <button onClick={() => handleDelete(singlePackage._id)} className="btn btn-danger">Delete Offer</button>


                            </div>

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default ManagePackages;