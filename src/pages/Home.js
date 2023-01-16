import React from 'react';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Button, Card, Container, ListGroup} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "react-router-dom/es/Link";
import axios, * as others from 'axios';
import back from "../images/back.png"
import data from "bootstrap/js/src/dom/data";
import './../App.css'
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
        <container >

        <div className="d-grid gap-2 d-md-flex justify-content-md-end home">
            <Link to="/">
            <button className="btn btn-outline-light me-md-2 btn-lg" type="button">Intro Page </button>
            </Link>
        <div>
            <center>
                <Link to="Create">
                    <button type="button" className="btn btn-outline-light btn-lg">Add New Task To The List
                    </button>
                </Link>
            </center>
            &nbsp;
           {/*<div>{TodoList()}</div>*/}
            <table className="table-wrapper">
                <thead>
                &nbsp;
                <tr>
                    <th >Task Number</th>
                    <th >Task Name</th>
                    <th >Action</th>
                </tr>
                </thead>
                <br/>
                <tbody >
                {toDo.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.task_name}</td>
                            <td>{item.task_desc}</td>
                            &nbsp;
                            <td>
                                <button type="button" className="btn btn-outline-danger" onClick={() => {
                                    deleteTask(item.task_id);
                                    window.location.reload()
                                }}>Delete
                                </button>
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
        </container>

    );
}

export default Home;