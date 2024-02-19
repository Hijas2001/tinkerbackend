import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Login.css'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import TinkerLogo from '../images/Tinkerspace.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Login() {
    const [options, setOptions] = useState('');
    const [mentor, setMentor] = useState('')
    const handleOptionChange = (event) => {
        setOptions(event.target.value);
    };
    const handleMentorChange = (event) => {
        setMentor(event.target.value)
    }

    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='body'>

            <div className='container'>
                <div className='logo'>
                    <img src={TinkerLogo} alt="" />
                </div>
                <div className='note'>
                    <h2>Daily Login</h2>
                    <p>Mark your Attendance!</p>
                </div>
                <div className='input-box'>
                    <TextField fullWidth label="Your name" variant="standard" />
                </div>
                <br />
                <div className='purpose'>
                    <p>What will you be doing at the space today?</p>
                    <p><span>Please mention the purpose of your visit</span></p>
                </div>
                <div className='radio-group'>
                    <div className='options'>
                        <label htmlFor="option1">
                            <input type="radio"
                                name="purpose"
                                id="option1"
                                value="option1"
                                checked={options === "option1"}
                                onChange={handleOptionChange} />
                            <span>Self Learning <i className="fa-solid fa-laptop"></i></span>
                        </label>
                    </div>
                    <div className='options'>
                        <label htmlFor="option2">
                            <input type="radio"
                                name="purpose"
                                id="option2"
                                value='option2'
                                checked={options === "option2"}
                                onChange={handleOptionChange} />
                            <span>Building a Project <i className="fa-solid fa-pencil"></i></span>
                        </label>
                    </div>
                    <div className='options'>
                        <label htmlFor="">
                            <input type="radio"
                                name="purpose"
                                id="option3"
                                value='option3'
                                checked={options === "option3"}
                                onChange={handleOptionChange}
                            /><span>Participant of an Event <i className="fa-solid fa-microphone"></i></span>
                        </label>
                    </div>
                    <div className='options'>
                        <label htmlFor="">
                            <input type="radio"
                                name="purpose"
                                id="option4"
                                value="option4"
                                checked={options === "option4"}
                                onChange={handleOptionChange}
                            /><span>Working Professional / Researcher <i className="fa-solid fa-user-tie"></i></span>
                        </label>
                    </div>
                </div>
                <br />
                {
                    options === 'option1' && (
                        <>
                            <div>
                                <p>Enter the Framework that you will be learning / working on today.</p>
                                <TextField fullWidth label="" variant="standard" />
                            </div>
                            <br />
                            <div className='mentor-mentee'>
                                <p>Do you want to be a Mentor or Mentee?</p>
                                <div className="mentorclass">
                                    <label htmlFor="">
                                        <input type="radio"
                                            name="menter"
                                            id="mentor"
                                            value='mentor'
                                            checked={mentor === 'mentor'}
                                            onChange={handleMentorChange}
                                        /><span className='mentor'>Mentor</span>
                                    </label>
                                </div>
                                <div className='mentorclass'>
                                    <label htmlFor="">
                                        <input type="radio"
                                            name="menter"
                                            id="mentee"
                                            value="mentee"
                                            checked={mentor === "mentee"}
                                            onChange={handleMentorChange}
                                        /><span className='mentee'>Mentee</span>
                                    </label>
                                </div>
                                {
                                    mentor === 'mentor' && (
                                        <div>
                                            <br />
                                            <p>Which domain you would like to give mentorship?</p>
                                            <TextField fullWidth label="" variant="standard" />
                                        </div>
                                    )
                                }
                                {
                                    mentor === 'mentee' && ("")
                                    // emplty nothing show
                                }
                            </div>
                        </>


                    )
                }
                {
                    options === 'option2' && (
                        <>
                            <div>
                                <p>Enter the Framework that you will be learning / working on today.</p>
                                <TextField fullWidth label=" " variant="standard" />
                            </div>
                            <br />
                            <div>
                                <p>Enter the name and the details of the project</p>
                                <TextField fullWidth id="outlined-basic" label=" " variant="outlined" className="build-textfield" />
                            </div>
                            <br />
                            <div className='mentor-mentee'>
                                <p>Do you want to be a Mentor or Mentee?</p>
                                <div className="mentorclass">
                                    <label htmlFor="">
                                        <input type="radio"
                                            name="menter"
                                            id="mentor"
                                            value='mentor'
                                            checked={mentor === 'mentor'}
                                            onChange={handleMentorChange}
                                        /><span className='mentor'>Mentor</span>
                                    </label>
                                </div>
                                <div className='mentorclass'>
                                    <label htmlFor="">
                                        <input type="radio"
                                            name="menter"
                                            id="mentee"
                                            value="mentee"
                                            checked={mentor === "mentee"}
                                            onChange={handleMentorChange}
                                        /><span className='mentee'>Mentee</span>
                                    </label>
                                </div>
                                {
                                    mentor === 'mentor' && (
                                        <div>
                                            <br />
                                            <p>Which domain you would like to give mentorship?</p>
                                            <TextField fullWidth label=" " variant="standard" />
                                        </div>
                                    )
                                }
                                {
                                    mentor === 'mentee' && ("")
                                    // emplty nothing show
                                }
                            </div>
                        </>
                    )
                }
                {
                    options === 'option3' && (
                        <div>
                            <p>Please mention the Name of the event.</p>
                            <p style={{ fontWeight: "200" }}>Such as an program happening at Tinkerspace</p>
                            <br />
                            <div>
                                <Button onClick={handleOpen} color='primary'><i class="fa-solid fa-plus"> Add</i></Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>

                        </div>
                    )
                }
                {
                    options === 'option4' && (
                        <div>
                            <div>
                                <p>What will you doing here?</p>
                                <TextField fullWidth label="" variant="standard" />
                            </div>
                            <br />
                            <div>
                                <p>Enter the Framework that you will be learning / working on today.</p>
                                <TextField fullWidth label="" variant="standard" />
                            </div>
                        </div>
                    )
                }
                <br />
                <div>
                    <p>Estimated duration of your visit</p>
                    <p style={{ fontWeight: "200" }}>Hours</p>
                    <TextField
                        variant="standard"
                        inputProps={{ type: 'number' }}  // This restricts input to numbers only
                    />
                </div>
                <br />
                <div>
                    <p>How can TinkerSpace assist you in your professional development?</p>
                    <TextField fullWidth id="outlined-basic" label="" variant="outlined" className="custom-textfield" />
                </div>
                <br />
                <button type="submit" className='btn'>Mark your Attendance</button>
                
                <div>
                    <br />
                    <p>Its your First Time ? <Link to={'/register'} style={{textDecoration:"none", color:" rgb(0, 132, 255)"}}> Register Now!</Link> </p>
                </div>
            </div>
        </div>

    )
}

export default Login