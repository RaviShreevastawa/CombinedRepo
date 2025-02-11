import React from 'react'
import {useDispatch} from 'react-redux'
//import authService from '../../../../backend/src/controllers/user.controller.js';
import {logout} from '../../redux/user/authSlice.js'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-black rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

 