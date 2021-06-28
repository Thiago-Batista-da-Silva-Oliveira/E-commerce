import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../actions/userActions'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
export default function RegisterScreen(props) {
    
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirmpassword, setConfirmPassword] = useState('')

    const redirect = props.location.search? props.location.search.split('=')[1] : '/'
    const userRegister = useSelector(state => state.userRegister)
     const {userInfo, loading, error} = userRegister
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
       e.preventDefault()
       if(password !== confirmpassword){
           alert('Password and confirm password are not match')
       }else{
        dispatch(register(name,email, password))
       }
      

    }

    useEffect(() =>{
      if(userInfo){
        props.history.push(redirect)
      }
    }, [userInfo, props.history, redirect])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign Up</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="email"
            required
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email adress</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
            <label />
            <button className="primary" type="submit">Sign Up</button>
        </div>
        <div>
            <label />
            <div>
                Already have an account? {''}
                <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
            </div>
        </div>
      </form>
    </div>
  );
}