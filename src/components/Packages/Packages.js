import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const Packages = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/addPackages',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added Successfully');
                reset()
            }
        })
       
    };
    return (
        <div>
            <h1>This is Packages </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Destination" {...register("name")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Image Url" {...register("img")} />
                <input placeholder="Description" {...register("description")} />
                {errors.exampleRequired && <span>This field is required</span>}
        <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Packages;