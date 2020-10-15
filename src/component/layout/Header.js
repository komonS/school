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
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        {user.fullname}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="" onClick={logout} >Logout</a>
                    </div>
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
                    <Link to="/login" className="nav-link" >Login</Link>
                </li>
            </ul>
        </div>
    }


    const getUser = async () => {
        let res = await axios.get("http://localhost/school/api/member/info", {
            params: {
                memberID: localStorage.userID
            }
        })

        let d = {
            fullname: res.data[0].fname + " " + res.data[0].lname,
            username: res.data[0].username,
            rule: res.data[0].memberStatusName
        }

        setUser(d)

    }

    useEffect(() => {

        if (localStorage.userID != null) {
            getUser()
        }

    }, [])

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <button className="navbar-toggler" id="sidebarCollapse" type="button" data-toggle="collapse">
                <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand justify-content-center" href="#">School</a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            {login ? <Login /> : <NonLogin />}


        </nav>

    )
}
