import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';

const AdminMaker = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const onSubmitEvent = () => {
        const formData = new FormData()
        formData.append('email', admin.email);

        fetch('https://shielded-refuge-74582.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    document.getElementById("adminUp").innerText = "Admin has been updated successfully"
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <section className="m-3">
            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                <div className="d-flex justify-content-between">
                    <h4 className="bg-white">Add Admin</h4>
                    <h4>{loggedInUser.name}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section style={{ height: "285px" }} className="addServiceSec">
                                <div className="mb-3 p-4">
                                    <div className="input-group-prepend">
                                        <b> Service Title </b>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <input onBlur={handleBlur} className="w-50 form-control mr-2" name="email" placeholder="Enter title" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Email is required</span>}
                                        <button className="btn btn-success" type="submit">Submit</button>
                                    </div>
                                    <b id="adminUp"></b>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminMaker;