import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Dashboard from '../Dashboard';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './OrderService.css'
import { UserContext } from '../../../App';

const OrderService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const {serviceLink} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const history = useHistory();
    const onSubmitEvent = () => {
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('desc', info.desc);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('price', info.price);

        fetch('https://shielded-refuge-74582.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        history.push("/userService");
    };

    return (
        <section className="m-3">

            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                <div className="d-flex justify-content-between">
                    <h4 className="bg-white">Order</h4>
                    <h4>{loggedInUser.name}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section className="orderServe mt-5">

                                        <div className="mb-3">
                                            <input style={{border: "none"}} onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Your Name/Company's Name" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Name is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <input style={{border: "none"}} onBlur={handleBlur} className="w-100 mx-auto form-control" name="email" placeholder="Your Email Address" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Email is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <input style={{border: "none"}} defaultValue={serviceLink} onBlur={handleBlur} className="w-100 mx-auto form-control" name="service" placeholder="Service Name" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service name is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <textarea style={{ height: "120px", width: "100%", border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Project Details" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Description is required</span>}
                                        </div>
                                        
                                        <div className="row">

                                        <div className="col-md-6">
                                            <input style={{border: "none"}} onBlur={handleBlur} className="w-100 form-control" name="price" placeholder="Price" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Price is required</span>}
                                        </div>

                                        <div className="col-md-6">
                                            <input style={{border: "none"}} id="file" accept="image/*" onChange={handleFileChange} className="w-100 mx-auto btn btn-dark form-control" type="file" name="img" ref={register({ required: true })} />
                                            {errors.eventBanner && <span className="error">Icon is required</span>}
                                            <label className="btn btnUpload w-100" for="file">
                                                <CloudUploadIcon></CloudUploadIcon> Upload Image</label>
                                        </div>
                                        </div>
                                        {file && <p className="text-success">Image has been uploaded</p>}

                                        <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white", fontSize: "12px" }} className="btn btnLogin w-25 p-3" type="submit">Send</button>
                                
                            </section>
                                
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderService;