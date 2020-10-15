import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'

import '../../css/Login.css'

export default function Login() {
    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [st, setSt] = useState(false)


    const Al = () => {
        return <div className="alert alert-danger">
        <strong>Error!</strong> username or password incorrect.
      </div>
    }

    const getUser = async(id) => {
        let res = await axios.get(url+"api/member/info",{
            params:{
                memberID:id
            }
        })
        console.log(res.data)
        let d = {
            fullname:res.data[0].fname + " " + res.data[0].lname,
            username:res.data[0].username,
            rule:res.data[0].memberStatusName
        }
        setUser(d)
    }

    const onLogin = async(e) => {
        e.preventDefault()
        let res = await axios.get(url+"api/member/login",{
            params:{
                username:username,
                password:password,
                status:"member"
            }
        })
        
        console.log(res.data)
        if(res.data.status !== "error"){
            localStorage.userID = res.data[0].memberID
            getUser(res.data[0].memberID)
            setLogin(true)
            history.push('/');
        }else{
            setSt(true)
            
        }
    }
    return (
        <div className="container login-box ">
            <h3 className="text-center">Login</h3>
            <form onSubmit={onLogin}>
                <div className="login-content">
                    <div className="form-group">
                        <label>Username : </label>
                        <input type="text" className="form-control" onChange={e=> setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" className="form-control" onChange={e=> setPassword(e.target.value)} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </div>
            </form>
            {st ? <Al/> : null}
        </div >
    )
}
