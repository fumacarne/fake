import React, {Component} from 'react';
import logo from "./images/logo.jpg";
import {NavLink, withRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar2 extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ml-5" href="//localhost:3000/#">
            <img src={logo} alt = "logo" style = {{width: "57px", height: "49px"}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-6"><h2>  K   A   M   V   A   S</h2></div>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
<li className="nav-item ml-5">
<a className={this.getNavLinkClass("/home")}><NavLink to="/home" >Log Out</NavLink></a>
</li>

</ul>
</div>
</nav>
    )
}}
Navbar2 = withRouter(Navbar2);
export default Navbar2 ;