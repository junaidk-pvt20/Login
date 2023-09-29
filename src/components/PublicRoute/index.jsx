import React from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from '../../utils/pagePath'
import { Cookies } from "react-cookie";
import { COOKIES } from "../../utils/constants";

const index = (props) => {
    let cookie = new Cookies();
    const isSignedIn = cookie.get(COOKIES.ACCESS_TOKEN) //add here token storage location;
    console.log('isSignedIn', isSignedIn)
    if (isSignedIn) {
        return <Navigate to={PATH.DASHBOARD} replace />
    }
    return props.children
}

export default index