import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom';
const Profile = (props) => {
    const { userdetail } = props;

    return (
        <div id="mainbar">
            <div id='mainfulldata'>
                <Link style={{ textDecoration: "none", cursor: 'pointer' }} to={'/users'}><div id='backtoregister'>Back</div></Link>
                <div id="content">
                    <div id="namefield">
                        <p>{userdetail.name}</p>
                    </div>
                    {/* <hr /> */}
                    <div className='imagedetaile'>
                        <div id="imagebar">
                            <img id='imagefield' src={userdetail.image} alt={userdetail.name} />
                        </div>
                        <div id='detailsinpara'>
                            <div className="fielddesc">
                                <p><span> Person : </span>{userdetail.person}</p>
                            </div>
                            <div className="fielddesc">
                                <p><span>Github : </span>{userdetail.github}</p>
                            </div>
                            <div className="fielddesc">
                                <p><span>Domain : </span>{userdetail.domain}</p>
                            </div>
                            <div className="fielddesc">
                                <span>How can TinkerSpace assist you in your professional development? : </span>
                                <p>{userdetail.assist}</p>
                            </div>
                            <div className="fielddesc">
                                <p><span>Join Date : </span>{userdetail.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile