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
import Header from "./Header";
import Footer from "./Footer";

function Home() {

    const [toDo, setToDo] = useState([{}])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // "http://localhost:5000/tasks_db"
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/tasks_db")
                .then(res => {
                    if (!res.ok) {
                        throw Error("The server is taking a nap")
                    }
                    return res.json()
                })
                .then(data => {
                    setToDo(data)
                    console.log(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000)
    }, [])
    const deleteTask = (id) => {
        console.log(id);
        if (window.confirm("Are you sure you want to Delete the Task")) {
            axios.delete(`http://localhost:5000/remove_task_db/${id}`).then(response => console.log("deleted", response)).catch(err => console.log(err))
        }
    }
    return (
        <container>
            <Header/>
            <div>
                {isPending &&
                    <h1>IT Is Just Loading .....</h1>}
                &nbsp;
                {error && <h4>{error}</h4>}

                {!error && !isPending && <div>
                    &nbsp;
                    <h1>Welcome to my To Do List</h1>
                    <h1><span className="underlined underline-clip">Add</span> &nbsp;
                        <span className="underlined underline-mask">Edit </span>
                        <span className="underlined underline-overflow"> Delete </span></h1>
                    &nbsp;
                    <div>
                        <Link to="/">
                            <button type="button" className="btn btn-warning">Go Back</button>
                        </Link>
                        &nbsp;
                        <Link to="Create">
                            <button type="button" className="btn btn-success">Add Task</button>
                        </Link></div>


                    <div className="table-title">

                        &nbsp;
                        <table className="table-fill">
                            <thead>
                            <tr>
                                <th className="text-left">Task Description</th>
                                <th className="text-left">Action</th>
                            </tr>
                            </thead>
                            {toDo.map((item, i) => {
                                return (
                                    <tbody className="text-left">
                                    <tr>
                                        <td>{item.task_name}</td>
                                        <td>
                                            <ul className="list-inline m-0">
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-primary">Primary
                                                    </button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-danger" onClick={() => {
                                                        deleteTask(item.task_id);
                                                        window.location.reload()
                                                    }}>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>}
            </div>
            <Footer/>
        </container>
    )
}

export default Home;