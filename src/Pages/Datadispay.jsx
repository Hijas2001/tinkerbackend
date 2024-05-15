
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile/Profile';



const Datadispay = () => {
    const [allusers, setAllUsers] = useState([]);

    useEffect(() => {

        fetch("http://localhost:4000/getalldata")
            .then(response => response.json())
            .then(data => setAllUsers(data))
            .catch(error => console.error('Error fetching data:', error));

    }, []); // Add dependency array to run useEffect only once

    const ImageWithToggleDiv = ({ item }) => {
        const [showDiv, setShowDiv] = useState(false);

        const handleClick = () => {
            setShowDiv(!showDiv);
        };

        return (

            <div className="imagebar" onClick={handleClick}>
                <img id="clickableImage" className='imagefield' src={item.image} alt={item.name} />
                {showDiv && (
                    <div id="redDiv">
                        <Profile userdetail={item}></Profile>
                    </div>
                )}
            </div>

        );
    };

    return (

        <div className='datadispay'>
            <Link style={{ textDecoration: "none" }} to={'/register'}><div className='backtoregister'>Back</div></Link>
            <div className='header'>
                <h1>Learners Attendance</h1>
            </div>

            <div className="mainbar">
                {allusers.map((item, index) => (
                    <div key={index} >
                        <div className="content">
                            {/* <div className="imagebar">
                                <img  id="clickableImage"  className='imagefield' src={item.image} alt={item.name} />
                            </div> */}
                                <ImageWithToggleDiv item={item} />
                            <div className="namefield">
                                <p> {item.name}</p>
                            </div>
                            <hr />
                            <div className="domain">
                                <p> {item.person}</p>
                            </div>
                            <div className="description">
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

