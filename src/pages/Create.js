import React from 'react';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Container} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, * as others from 'axios';
import {useHistory, useParams, Link} from "react-router-dom";

function Create() {
    const [task, setTask] = useState([])
    const addTask = () => {
        console.log(task)
        axios.post("http://localhost:5000/add_task_db", {task: task,}).then(() => {
            console.log("corona test snel test ");
            toast.success("Task Is Added to the List ");
        });
    };
    return (
        <div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/">
                <button className="btn btn-outline-light me-md-2 btn-lg" type="button">Intro Page </button>
            </Link>
        </div>
        <center>
            <Container>
                <ToastContainer></ToastContainer>

                    <div style={{marginTop: "130px",
                    color:"white"}}>
                        <h1>Add your New Task Here </h1>
                    </div>
                <div style={{marginTop: "130px"}}>
                    <div className="input-group">
                        <span className="input-group-text">New task here </span>
                        <input type="text" aria-label="First name" className="form-control"
                               placeholder="Type Your Task Here.."
                               onChange={(event) => {
                                   setTask(event.target.value);
                               }}
                        />
                    </div>
                    <div>
                        <button style={{marginTop: "100px"}} type="button" className="btn btn-outline-light"
                                onClick={()=>{
                                    addTask();
                                    window.location.reload()
                                }}>Add To The List
                            <ToastContainer/>

                        </button>
                        &nbsp;
                        <Link to="/Home">
                            <button style={{marginTop: "100px"}} type="button"
                                    className="btn btn-outline-light">Back To Home Screen
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>

        </center>
        </div>
    )
}

export default Create;

