import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';

const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [redirect, setRedirect] = useState();

    // Individual data for every user
    useEffect(() => {
        fetch(`https://shielded-refuge-74582.herokuapp.com/orders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrders(data)
                    setRedirect(true)
                }
            })
    }, [redirect]);
    return (
        <section className="m-3">
            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                <div className="d-flex justify-content-between">
                    <h4 className="bg-white">My Service List</h4>
                    <h4>{loggedInUser.name}</h4>
                    </div>
                    <div className="adminService p-4">
                        <div>
                            {orders.length === 0 && <h5 align="center">Loading..........</h5>}
                            <div className="row mt-4">
                                {
                                    orders.map(order => <div style={{ padding: '15px' }} className="col-md-5" order={order} key={order._id}>
                                        <div style={{ borderRadius: '10px' }} className="bg-white m-2 p-4">
                                            <div className="d-flex justify-content-between">
                                                <img style={{ width: '50px' }} src={`data:image/png;base64,${order.image.img}`} alt="" />
                                <p className="btn btnUpload">{order.status ? order.status : "Pending"}</p>
                                            </div> <br />
                                            <h6><b> {order.service}</b></h6>
                                            <p>{order.desc}</p>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;