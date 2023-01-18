import React from 'react';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Container} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "react-router-dom/es/Link";
import Header from "./Header";
import Navbar from "./Header";
import Footer from "./Footer";
// import bgImage from "../Videos/chapter one.mp4"
function Intro() {
    return (
        <Container>

        <div>
        <Navbar/>
        <center>
                <div >
                    <h1>                    To Do App
                    </h1>
                </div>
                <div >
                    <Link to="/Home">
                        <button type="button" className="btn btn-outline-light btn-lg">let's Start</button>

                    </Link>
                </div>

        </center>
        </div>
            <Footer/>
        </Container>
    );
}
export default Intro;