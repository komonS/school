import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'


export default function Header() {

    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)


    const logout = () => {
        localStorage.clear()
        setLogin(false)
        let deluser = {
            fullname: '',
            username: '',
            rule: ''
        }
        setUser(deluser)
    }

    const Login = () => {
        return <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="" onClick={logout} >Logout</a>
                </li>
            </ul>
        </div>
    }

    const NonLogin = () => {
        return <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    }

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <button className="navbar-toggler" id="sidebarCollapse" type="button" data-toggle="collapse">
                <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand justify-content-center" href="#">Navbar</a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            {login ? <Login /> : <NonLogin />}


        </nav>

    )
}
