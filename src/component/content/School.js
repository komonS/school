import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'
import '../../css/School.css'
import SchoolHeader from '../widget/SchoolHeader';

export default function School() {
    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)

    const {id} = useParams()
    return (
        <div className="contrainer-flude school-content">
            <SchoolHeader schoolID={id} />
        </div>
    )
}
