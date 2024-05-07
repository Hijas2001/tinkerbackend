import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Login.css'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import TinkerLogo from '../images/Tinkerspace.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadData } from '../services/allAPI';

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
  // const [person, setPerson] = useState('')
  // const [options, setOptions] = useState('');


  const [projectDetails, setProjectDetails] = useState({
    name: "",
    email: "",
    gender: "mail",
    number: "",
    person: "",
    github: ""
  })
  const changeHandler = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    try {
        console.log(projectDetails); // Make sure projectDetails is defined and contains data

        const response = await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
              Accept: 'application/form-data',
                'Content-Type': 'application/json' // Changed Accept to Content-Type
            },
            body:JSON.stringify(projectDetails)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle response here if needed
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}



  const [nextPagePath, setNextPagePath] = useState('');

  const handleEventChange = (event) => {
    setEvent(event.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()

    const { name, email, number, github, gender, person } = projectDetails
    if (!name || !email || !number || !github || !gender || !person) {
      toast.warning("Please fill the form completely")
    }
    else {
      const response = await uploadData(projectDetails)
      console.log(projectDetails);
      if (response.status === 201) {
        toast.success("Registration Successfull")
        setTimeout(() => {
          setNextPagePath('/'); // Replace '/next-page' with the path to your next page
        }, 5000);
      }
      else {
        toast.error("Something went wrong")
        console.log(response);
      }
    }
  }
  if (nextPagePath) {
    window.location.href = nextPagePath;
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
          <TextField fullWidth label="" variant="standard"  name='name' value={projectDetails.name} onChange={changeHandler} />
        </div>
        <div className='input-box'>
          <p>Your e-mail</p>
          <TextField fullWidth label="" variant="standard" name='email' value={projectDetails.email} onChange={changeHandler} />
        </div>
        <br />
        <div className='radio-group'>
          <div className='options'>
            <label htmlFor="option1">
              <input type="radio"
                name="purpose"
                id="option1"
                value="male"
                checked={projectDetails.gender === "male"}
                onChange={((e) => setProjectDetails({ ...projectDetails, gender: e.target.value }))} />
              <span name='gender' value={projectDetails.name} onChange={changeHandler}>He / Him <i class="fa-solid fa-person"></i></span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="option2">
              <input type="radio"
                name="purpose"
                id="option2"
                value='female'
                checked={projectDetails.gender === "female"}
                onChange={((e) => setProjectDetails({ ...projectDetails, gender: e.target.value }))} />
              <span name='gender' value={projectDetails.name} onChange={changeHandler}>She / Her <i class="fa-solid fa-child-dress"></i></span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="">
              <input type="radio"
                name="purpose"
                id="option3"
                value='groups'
                checked={projectDetails.gender === "groups"}
                onChange={((e) => setProjectDetails({ ...projectDetails, gender: e.target.value }))}
              /><span name='gender' value={projectDetails.name} onChange={changeHandler}>They / Them <i class="fa-solid fa-people-group"></i></span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="">
              <input type="radio"
                name="purpose"
                id="option4"
                value="professional"
                checked={projectDetails.gender === "professional"}
                onChange={((e) => setProjectDetails({ ...projectDetails, gender: e.target.value }))}
              /><span name='gender' value={projectDetails.name} onChange={changeHandler}>Working Professional / Researcher <i className="fa-solid fa-user-tie"></i></span>
            </label>
          </div>
        </div>
        <br />

        <div>
          <p>Your contact number</p>
          <p style={{ fontWeight: "200", fontSize: "80%" }}>Preferably Whatsapp number <i class="fa-brands fa-whatsapp"></i></p>
          <TextField label="" variant="standard" name='number' value={projectDetails.number} onChange={changeHandler} />
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
                value='student'
                checked={projectDetails.person === "student"}
                onChange={((e) => setProjectDetails({ ...projectDetails, person: e.target.value }))} />
              <span> Student</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person2">
              <input type="radio"
                name="person"
                id="person2"
                value='working'
                checked={projectDetails.person === "working"}
                onChange={((e) => setProjectDetails({ ...projectDetails, person: e.target.value }))}
              /><span>Working Professional </span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person3">
              <input type="radio"
                name="person"
                id="person3"
                value="Entrepreneur"
                checked={projectDetails.person === "Entrepreneur"}
                onChange={((e) => setProjectDetails({ ...projectDetails, person: e.target.value }))}
              /><span>Entrepreneur</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person4">
              <input type="radio"
                name="person"
                id="person4"
                value="Freelancer"
                checked={projectDetails.person === "Freelancer"}
                onChange={((e) => setProjectDetails({ ...projectDetails, person: e.target.value }))}
              /><span>Freelancer</span>
            </label>
          </div>
          <div className='options'>
            <label htmlFor="person5">
              <input type="radio"
                name="person"
                id="person5"
                value="Other"
                checked={projectDetails.person === "Other"}
                onChange={((e) => setProjectDetails({ ...projectDetails, person: e.target.value }))}
              /><span>Other</span>
            </label>
          </div>
          <br />
          {
            projectDetails.person === "student" && (
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
            projectDetails.person === "working" && (
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
            projectDetails.person === "Entrepreneur" && (
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
            projectDetails.person === "Freelancer" && (
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
            projectDetails.person === "Other" && (
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
            <TextField fullWidth label="" variant="standard" onChange={((e) => setProjectDetails({ ...projectDetails, github: e.target.value }))} />
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

        <button type="submit" className='btn' onClick={addProduct}>Submit</button>


        <div>
          <br />
          <p>If you have already registered ? <Link to={'/'} style={{ textDecoration: "none", color: " rgb(0, 132, 255)" }}> Mark your Attendance!</Link> </p>
        </div>
        <br />
      </div>
      <ToastContainer position="top-center" autoClose={5000} theme="colored"
      />
    </div>
  )
}

export default Register