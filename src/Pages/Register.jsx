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

function Register() {
  const [event, setEvent] = useState('')
  const [person, setPerson] = useState('')
  const [options, setOptions] = useState('');
  const handleOptionChange = (event) => {
    setOptions(event.target.value);
  };
  
  const handlePersonChange = (event) => {
    setPerson(event.target.value)
  }
  const handleEventChange = (event) => {
    setEvent(event.target.value)
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
          <h2>TinkerSpace Walk-in</h2>
          <p>Fill in the form to register yourself at TinkerSpace</p>
        </div>
        <br />
        <div className='input-box'>
          <p>Your Full Name</p>
          <TextField fullWidth label="" variant="standard" />
        </div>
        <div className='input-box'>
          <p>Your e-mail</p>
          <TextField fullWidth label="" variant="standard" />
        </div>
        <br />
        <div className='radio-group'>
          <div className='options'>
            <label htmlFor="option1">
              <input type="radio"
                name="purpose"
                id="option1"
                value="option1"
                checked={options === "option1"}
                onChange={handleOptionChange} />
              <span>He / Him <i class="fa-solid fa-person"></i></span>
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
              <span>She / Her <i class="fa-solid fa-child-dress"></i></span>
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
              /><span>They / Them <i class="fa-solid fa-people-group"></i></span>
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

        <div>
          <p>Your contact number</p>
          <p style={{ fontWeight: "200", fontSize: "80%" }}>Preferably Whatsapp number <i class="fa-brands fa-whatsapp"></i></p>
          <TextField label="" variant="standard" />
        </div>
        <br />
        <div>
          <label htmlFor="project-img-upload">
            <p>Insert your Photo</p>
            <input type="file" name="" id="project-img-upload" style={{ display: "none" }} />
            <button className='upload'><i class="fa-solid fa-upload"></i> Attach  file</button>
          </label>
        </div>
        <br />
        <p>You are a ___</p>
        <div className="radio-group">
          <div className='options'>
            <label htmlFor="person1">
              <input type="radio"
                name="person"
                id="person1"
                value='person1'
                checked={person === "person1"}
                onChange={handlePersonChange} />
              <span> Student</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person2">
              <input type="radio"
                name="person"
                id="person2"
                value='person2'
                checked={person === "person2"}
                onChange={handlePersonChange}
              /><span>Working Professional </span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person3">
              <input type="radio"
                name="person"
                id="person3"
                value="person3"
                checked={person === "person3"}
                onChange={handlePersonChange}
              /><span>Entrepreneur</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person4">
              <input type="radio"
                name="person"
                id="person4"
                value="person4"
                checked={person === "person4"}
                onChange={handlePersonChange}
              /><span>Freelancer</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person5">
              <input type="radio"
                name="person"
                id="person5"
                value="person5"
                checked={person === "person5"}
                onChange={handlePersonChange}
              /><span>Other</span>
            </label>
          </div>
          <br />
          {
            person === "person1" && (
              <>
                <div>
                  <p>Enter the domain that you will working on</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
                <br />
                <div>
                  <p>Name of the educational / startup / organization</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
              </>
            )
          }
          {
            person === "person2" && (
              <>
                <div>
                  <p>Enter the domain that you will working on</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
                <br />
                <div>
                  <p>Name of the educational / startup / organization</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
              </>
            )
          }
          {
            person === "person3" && (
              <>
                <div>
                  <p>Enter the domain that you will working on</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
                <br />
                <div>
                  <p>Name of the educational / startup / organization</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
              </>
            )
          }
          {
            person === "person4" && (
              <>
                <div>
                  <p>Enter the domain that you will working on</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
                <br />
              </>
            )
          }
          {
            person === "person5" && (
              <>
                <div>
                  <p>What do you do?</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
                <br />
                <div>
                  <p>Enter the domain that you will working on</p>
                  <TextField fullWidth label="" variant="standard" />
                </div>
              </>
            )
          }
          <div>
            <br />
            <p>Are you a Participant of an event happening today?</p>
            <div className='options'>
              <label htmlFor="">
                <input type="radio"
                  name="event"
                  id="event-yes"
                  value='event-yes'
                  checked={event === "event-yes"}
                  onChange={handleEventChange}
                /><span>Yes</span>
              </label>
              <br />
              <label htmlFor="">
                <input type="radio"
                  name="event"
                  id="event-no"
                  value='event-no'
                  checked={event === "event-no"}
                  onChange={handleEventChange}
                /><span>No </span>
              </label>
            </div>
            {
              event === "event-yes" && (
                <>
                  <div>
                    <br />
                    <p>Please mention the Name of the event</p>
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
                </>
              )
            }
          </div>
          <br />
          <div>
            <p>Share your Github profile link</p>
            <TextField fullWidth label="" variant="standard" />
          </div>
          <br />
          <div>
            <p>Would you like to receive updates from Tinkwespace ?</p>
            <div className='options'>
              <label htmlFor="">
                <input type="radio"
                  name="updates"
                /><span>Yes</span>
              </label>
              <br />
              <label htmlFor="">
                <input type="radio"
                  name="updates"
                /><span>No </span>
              </label>
            </div>
          </div>
        </div>
        <br />
        <div>
          <p>How can TinkerSpace assist you in your professional development?</p>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined" className="custom-textfield" />
        </div>
        <br />
        <button type="submit" className='btn'>Submit</button>

        <div>
          <br />
          <p>If you have already registered ? <Link to={'/'} style={{ textDecoration: "none", color: " rgb(0, 132, 255)" }}> Mark your Attendance!</Link> </p>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Register