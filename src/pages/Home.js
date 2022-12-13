import React from 'react';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Container} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "react-router-dom/es/Link";
import axios, * as others from 'axios';
import back from "../images/back.png"

// import {useHistory, useParams, Link} from "react-router-dom";

function Home() {
    // useEffect(() => {
    //     toast.success("Add Tasks")
    //     toast.error("Delete A Task ")
    //     toast.warn("Update Task")
    //     setTimeout(() => {
    //         console.log("this is the first message")
    //     }, 5000);
    //
    //     }, [1]);
    const [toDo, setToDo] = useState([{}])
    useEffect(() => {
        fetch("http://localhost:5000/tasks_db")
            .then((response) => response.json())
            .then((data) => {
                setToDo(data);
                console.log(data);
            });
    }, []);

    const deleteTask = (id) => {
        console.log(id);
        if (window.confirm("Are you sure you want to Delete the Task")) {
            axios.delete(`http://localhost:5000/remove_task_db/${id}`).then(response => console.log("deleted", response)).catch(err => console.log(err))
        }
    }
    return (

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/">
            <button className="btn btn-outline-light me-md-2 btn-lg" type="button">Intro Page </button>
            </Link>
        <div style={{
            position: "absolute",
            top: "170px",
            right: "600px",
        }}>
            <center>
                <Link to="Create">
                    <button type="button" className="btn btn-outline-light btn-lg">Add New Task To The List
                    </button>
                </Link>
            </center>
            &nbsp;
            <table className="styled-table">
                <thead>
                &nbsp;
                <tr>
                    <th style={{
                        fontSize:20,
                        textAlign: "center",
                        color: "white"
                    }}>Task Number
                    </th>
                    <th style={{
                        fontSize:20,
                        textAlign: "center",
                        color: "white"
                    }}>Task Name
                    </th>
                    <th style={{
                        fontSize:20,
                        textAlign: "center",
                        color: "white"
                    }}>Action
                    </th>
                </tr>
                </thead>
                &nbsp;
                <tbody style={{color: "white",
                    fontSize:20,
                }}>
                {toDo.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.task_name}</td>
                            &nbsp;
                            <td>
                                <button type="button" className="btn btn-outline-danger" onClick={() => {
                                    deleteTask(item.task_id);
                                    window.location.reload()
                                }}>Delete
                                </button>
                                &nbsp;

                                <Link to="/Update">
                                    <button type="button" className="btn btn-outline-primary">Update</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </div>

    );
}

export default Home;