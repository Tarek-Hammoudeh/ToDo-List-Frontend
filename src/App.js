import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Create from "./pages/Create";
import Intro from "./pages/Intro";
import Header from "./pages/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path ="/Home" component={Home} />
                    <Route exact="/Create" component={Create} />
                    <Route path="/Update" component={Update} />
                    <Route path="/Delete " component={Delete} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;