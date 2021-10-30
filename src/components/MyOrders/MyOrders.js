import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {

    const [myOrders, setMyOrder] = useState([]);
    const {user} = useFirebase();
    console.log(user?.email)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/myOrders')
    //     .then(res=>res.json())
    //     .then(result=>{
    //         console.log(result)
    //     })
    // },[])

    return (
        <div>
            <h2>this is my orders item page</h2>
        </div>
    );
};

export default MyOrders;