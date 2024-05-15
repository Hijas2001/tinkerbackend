import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom';
const Profile = (props) => {
    const { userdetail } = props;

    return (
        <div id="mainbar">


            <div id='backbuttonname'>
                <Link style={{ textDecoration: "none" }} to={'/users'}><div id='backtoregister'>Back</div></Link>

                <div id="content">
                    <div id="namefield">
                        <p>{userdetail.name}</p>
                    </div>
                    <hr />
                    <div id="imagebar">

                        <img id='imagefield' src={userdetail.image} alt={userdetail.name} />
                    </div>
                    <div id='detailsinpara'>
                        <div id="domain">
                            <p> Person : {userdetail.person}</p>
                        </div>
                        <div id="description">
                            <p>Github : {userdetail.github}</p>
                        </div>
                        <div id="description">
                            <p>Domain : {userdetail.domain}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile