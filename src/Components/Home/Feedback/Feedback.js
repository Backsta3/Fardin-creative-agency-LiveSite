import React, { useEffect, useState } from 'react';
import FeedbackData from './FeedbackData/FeedbackData';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [redirect, setRedirect] = useState();
    
    // Database
    useEffect(() =>{
        fetch("https://shielded-refuge-74582.herokuapp.com/getReview")
        .then(res => res.json())
        .then(data => {
            setFeedbacks(data)
            setRedirect(true)
        })
    }, [redirect]);

    return (
        <div className="container mb-5" id="review">
            {feedbacks.length === 0 && <h1 align="center"> Loading............ </h1>}
            <h3 align="center"><b> Clients <strong className="text-warning"> Feedback </strong></b></h3>
            <div className="d-flex justify-content-center mt-3">
                <div className="mx-auto w-100 row mt-2 pt-4">
                    {
                        feedbacks.map(feedback => <FeedbackData feedback={feedback} key={feedback._id}></FeedbackData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;