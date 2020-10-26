import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'
import '../../css/School.css'

export default function SchoolHeader(props) {
    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)

    const [schoolNameTH, setSchoolNameTH] = useState('')
    const [schoolNameEN, setSchoolNameEN] = useState('')
    const [schoolPicture, setSchoolPicture] = useState('')

    const getSchool = async () => {
        let res = await axios.get(url + 'api/school/school', {
            params: {
                schoolID: props.schoolID
            }
        })
        console.log(res.data)
        if (res.data.length > 0) {
            setSchoolNameEN(res.data[0].schoolNameEN)
            setSchoolNameTH(res.data[0].schoolNameTH)
            setSchoolPicture(res.data[0].schoolPicture)
        }
    }
    useEffect(() => {
        getSchool()
    }, [])
    return (
        <div className="school-header">
            <div className="school-header-picture-box">
                {schoolPicture ? <img className="rounded school-header-picture" src={schoolPicture} /> : <img className="rounded school-header-picture" src="../../assets/school.png" />}
            </div>
            <div className="school-header-name">
               <h3>{schoolNameTH}</h3><br />
               <b>{schoolNameEN}</b>
            </div>

        </div>
    )
}
