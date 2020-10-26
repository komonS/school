import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'
import '../../css/School.css'
export default function SchoolCard() {
    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)

    const history = useHistory()

    const [school, setSchool] = useState([])

    const getSchool = async () => {
        let res = await axios.get(url + 'api/school/school')
        setSchool(res.data)
    }

    useEffect(() => {
        getSchool()
    }, [])
    return (
        <div className="row">
            {school.map((item, index) => (
                <div className="col-md-2 school-card">
                    <Link to={'/school/' + item.schoolID}>
                        <div className="card">
                            {item.schoolPicture ? <img className="card-img-top" src={item.schoolPicture} /> : <img className="card-img-top" src="../../assets/school.png" />}
                            <div className="card-body">
                                <b>{item.schoolNameTH}</b>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    )
}
