import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard';
import './AdminAddService.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { UserContext } from '../../../App';

const AdminAddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
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
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('desc', info.desc);

        fetch('https://shielded-refuge-74582.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => {
                console.error(error)
            })
        history.push("/");
    };

    return (
        <section className="m-3">

            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                    <h4 className="bg-white">Add Service</h4>
                    <h4>{loggedInUser.name}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section className="addServiceSec">
                                <div className="row p-4">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                                <b> Service Title </b>
                                            </div>
                                            <input onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Enter title" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service Title is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                                <b> Description</b>
                                            </div>
                                            <textarea style={{ height: "120px", width: "100%" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Enter Designation" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Description is required</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <b>Icon</b>
                                        <div className="input-group mb-3">
                                            <input id="file" accept="image/*" onChange={handleFileChange} className="w-100 mx-auto btn btn-dark form-control" type="file" name="img" ref={register({ required: true })} />
                                            {errors.eventBanner && <span className="error">Icon is required</span>}
                                            <label className="btn btnUpload w-50" for="file">
                                                <CloudUploadIcon></CloudUploadIcon> Upload Image</label>
                                        </div>
                                        {file && <p className="text-success">Image has been uploaded</p>}
                                    </div>
                                </div>
                            </section>
                            <div className=" d-flex justify-content-end mt-2">
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAddService;