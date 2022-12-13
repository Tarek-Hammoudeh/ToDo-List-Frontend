import React from 'react';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/Logo.jpg"
import {Container} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "react-router-dom/es/Link";
// import bgImage from "../Videos/chapter one.mp4"
function Intro() {
    return (
        <center>
            <Container>
                {/*<video autoPlay loop muted style={{*/}
                {/*    position:"absolute",*/}
                {/*   zIndex:-1,*/}
                {/*    top:0,*/}
                {/*    left:0,*/}
                {/*    width:"100%",*/}
                {/*    height:"100hv"*/}
                {/*}}>*/}
                {/*    <source src={bgImage} type="video/mp4"/>*/}
                {/*</video>*/}
                <ToastContainer/>
                <div style={{
                    position: "absolute",
                    top: "200px",
                    right: "100px"
                }}>
                    <h1>                    To Do App
                    </h1>
                </div>
                <div style={{
                    position: "absolute",
                    top: "300px",
                    right: "200px"
                }}>
                    <Link to="/Home">
                        <button type="button" className="btn btn-secondary btn-lg">Let's Do It </button>

                    </Link>
                </div>
            </Container>

        </center>

    );
}

export default Intro;