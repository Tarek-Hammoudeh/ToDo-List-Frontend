import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Container} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Axios} from "axios";
import {useHistory, useParams, Link} from "react-router-dom";

function Update() {
    useEffect(() => {
        toast.warning("Update Tasks")
    }, [1]);
    return (
        <center>
            <Container>
                <ToastContainer>
                </ToastContainer>
                <div style={{marginTop: "130px"}}>
                    <h1>Add your New Task Here </h1>
                </div>
                <div style={{marginTop: "130px"}}>
                    <div className="input-group">
                        <span className="input-group-text">Update Task Here </span>
                        <input type="text" aria-label="First name" className="form-control"
                               placeholder="Type Your Task Here.."
                        />
                    </div>
                    <div>
                        <button style={{marginTop: "100px"}} type="button" className="btn btn-outline-primary"
                        >Update The Task
                        </button>
                        <Link to="/">
                            <button style={{marginTop: "100px"}} type="button"
                                    className="btn btn-outline-primary">Back To Home Screen
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </center>
    )
}

export default Update;


