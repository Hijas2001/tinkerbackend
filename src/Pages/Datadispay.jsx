
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Datadispay = () => {
    const [allusers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/getalldata")
            .then(response => response.json())
            .then(data => setAllUsers(data))
            .catch(error => console.error('Error fetching data:', error));

    }, []); // Add dependency array to run useEffect only once

    return (
        <div classNameName='datadispay'>
            <Link style={{textDecoration:"none"}} to={'/register'}><div classNameName='backtoregister'>Back</div></Link>
            <div classNameName='header'>
                <h1>Learners Attendance</h1>
            </div>

            <div classNameName="mainbar">
                {allusers.map((item, index) => (
                    <div key={index} >
                        <div classNameName="content">
                            <div classNameName="imagebar">
                                <img classNameName='imagefield' src={item.image} alt={item.name} />
                            </div>
                            <div classNameName="namefield">
                                <p> {item.name}</p>

                            </div>
                            <hr />
                            <div classNameName="domain">
                                <p> {item.person}</p>

                            </div>
                            <div classNameName="description">
                                <p> {item.github}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Datadispay;

