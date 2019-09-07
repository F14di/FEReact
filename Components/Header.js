import React from 'react';
import logo from '../assets/amdocs-logo.png'


export default class Header extends React.Component{
    

    render(){
        return <>
            <nav style={{borderBottom:"1px solid purple"}} className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <a className="navbar-brand p-0" href="#" >
                    <img src={logo} className="" style={{"height":"23px"}}/>
                </a>
                    <a className="nav-link m-0" style={{"color":"teal"}} href="#"><p className="m-0">Login</p></a>
            </nav>
        </>
    }
}