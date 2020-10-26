import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'


export default function SchoolMenu() {
    const { login, setLogin } = useContext(LoginContext)
    const { user, setUser } = useContext(UserContext)
    const { url } = useContext(UrlContext)

    const history = useHistory()

    const [school, setSchool] = useState([])

    const getSchool = async () => {
        let res = await axios.get(url + 'api/techers/school', {
            params: {
                memberID: localStorage.userID
            }
        })

        setSchool(res.data)
    }

    const Image = (props) => {
        let picture;
        if(props.picture != ""){
            picture = <img  width="25" height="25" src={url+props.picture} />
        }else{
            picture = <img  width="25" height="25" src="../../assets/school.png" />
        }
        return picture
    }

    useEffect(() => {
        getSchool()
    }, [])

    return (
        <li>
            <a href="#schoolSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">My School</a>
            <ul className="collapse list-unstyled" id="schoolSubmenu">
                {school.map((item, index) => (
                    <li key={index}>
                        <a href="#"><Image picture={item.schoolPicture}/> {item.schoolNameTH}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}
