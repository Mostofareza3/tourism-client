import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Packages.css'


const Packages = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/addPackages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset()
                }
            })

    };
    return (
        <div>
            <h1 className="heading">Add a New Package </h1>
            <form className="insertPackage" onSubmit={handleSubmit(onSubmit)}>
                <input required placeholder="Destination" {...register("name")} />
                <input required placeholder="Price" type="number" {...register("price")} />
                <input required placeholder="Image Url" {...register("img")} />
                <input required placeholder="Description" {...register("description")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Packages;