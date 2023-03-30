import React, {useState} from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login} from '../../actions/auth'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import "./Auth.css"
const Auth = () => {

    const [IsSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!IsSignup)
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
        alert('Enter email and Password')
    }
    if(IsSignup) {
        if(!name) {
            alert("Enter a name to continue")
        }
        dispatch(signup({ name, email, password }, navigate))
    }else {
        dispatch(login({email, password}, navigate))
    }
    // console.log({name , email, password})

}

  return (
    <section class='auth-section'>
        { IsSignup && <AboutAuth/>}
        <div className="auth-container-2">
            { !IsSignup && <img src={icon} alt="stack Overflow" className="login-logo"/> }
        
            <form onSubmit = {handleSubmit}>
                {
                    IsSignup && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}} />
                        </label>
                    )
                }
               <label htmlFor="email">      {/* htmlFor should be of same name as id of input */}
                    <h4>Email</h4>
                    <input type="email" name="name" id='email' onChange={(e) => {setEmail(e.target.value)}} />  
                </label>
                <label htmlFor="password">
                    <div style={{display: "flex",
                                justifyContent: "space-between"
                }}>
                    <h4>Password</h4>
                     {!IsSignup && <p style={{color: "#007ac6"}}>forgot password? </p>}     {/* both need to be true */}
                    </div>
                    <input type="password" name="name" id='password' onChange={(e) => {setPassword(e.target.value)}} />
                    {
                    IsSignup && <p style={{
                        color: "#666767",
                        fontSize: "13px"
                    }}>
                        Passwords must contain at least eight <br /> characters, including at least 1 letter and 1 <br /> number.
                    </p>
                }
                </label>
                {
                    IsSignup && 
                    <label htmlFor="check">
                        <input type="checkbox" id='check' name='check' />

                        <p style={{
                            fontSize: "13px"
                        }}>

                        Opt-in to receive occasional product <br /> updates, user research invitations, company <br /> announcements, and digests.

                        </p>
                    </label>
                }
                <button type='submit' className='auth-btn'>{ IsSignup ? 'SignUp' : 'Login' }</button>
            { IsSignup && (
            <p style={{
                color: "#666767",
                fontSize: "13px"
            }}>
                By clicking “Sign up”, you agree to our 
                <span style={{color: "#007ac6"}}>  terms of <br /> service</span>, 
                <span style={{color: "#007ac6"}}>  privacy policy</span> and 
                <span style={{color: "#007ac6"}}>  cookie policy</span>
            </p>) }
            </form>
            <p>
                { IsSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
                    {IsSignup ? "Log In" : "Sign Up"}
                </button>
            </p>
        </div>
    </section>
  )
}

export default Auth