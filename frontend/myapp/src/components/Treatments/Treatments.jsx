import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Treatments.css';

const Treatments = () => {
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {

        axios.get('https://backend-clinic-website.onrender.com/treatments')
            .then(response => {
                setTreatments(response.data);
            })
            .catch(error => {
                console.error('Error fetching treatments:', error);
            });
    }, []);

    return (
        <div className="treatment_div">
            <h5 className='Page_title text center'><span><i class="ri-hospital-line"></i><i class="ri-arrow-right-s-line"></i></span> Learn about our treatments</h5>

            <div className="treatment_container">

                {treatments.length > 0 ? (
                    treatments.map((item) => (
                        <Link to={`/treatment/${item.t_id}`} key={item.t_id}>
                            <div className="treatment_main_box">
                                <div className="treatment_box">
                                    <div className="treatment_img_div">
                                        <img src={item.img1} alt={item.title} />
                                    </div>
                                    <h3 style={{ textDecoration: "none", color: 'inherit' }}>{item.title}</h3>
                                    <p>{item.greet}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Loading treatments...</p>
                )}
            </div>
        </div>
    );
};

export default Treatments;
