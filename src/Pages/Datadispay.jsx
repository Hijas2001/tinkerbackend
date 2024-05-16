
import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../components/Profile/Profile';




const Datadispay = () => {
    const [allusers, setAllUsers] = useState([]);

    const [showButton, setShowButton] = useState(true);


    const navigate = useNavigate();

    const buthandleClick = () => {
        setShowButton(showButton);
        navigate('/users');
    };

    useEffect(() => {

        fetch("http://localhost:4000/getalldata")
            .then(response => response.json())
            .then(data => setAllUsers(data))
            .catch(error => console.error('Error fetching data:', error));

    }, []);



    const ImageWithToggleDiv = ({ item }) => {
        const [showDiv, setShowDiv] = useState(false);

        const handleClick = () => {
            setShowDiv(true);
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

        <div className='datadispay' >
            <Link style={{ textDecoration: "none" }} onClick={buthandleClick} to={'/register'}><div className='backtoregister'>Back</div></Link>
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
                            <ImageWithToggleDiv key={item.id} item={item} />
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

