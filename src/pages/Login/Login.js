import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/slices/auth'
import { useLoginMutation } from '../../redux/slices/authApiSlice'
import { PASSWORD_REGEX, TEXT_REGEX } from '../../utils/Constants'

import './Login.scss';

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            localStorage.setItem('token', 'token')
            navigate('/nominees')
        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    const handleUserInput = (e) => {
        const isValid = TEXT_REGEX.test(e.target.value);
        if(!isValid){
            alert('Special characters ans spaces are not allowed!')
        } else {
            setUser(e.target.value);
        }
    }

    const handlePwdInput = (e) => {
        const isValidPwd = PASSWORD_REGEX.test(e.target.value);
        if(!isValidPwd){
            setPwd(e.target.value);
        } else {
            alert('Password must be at least one capital character, number and special character')
        }
    }

    const content = (
      <section className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  id="username"
                  ref={userRef}
                  value={user}
                  onChange={handleUserInput}
                  autoComplete="off"
                  placeholder='User name'
                  required
              />

              <input
                  type="password"
                  id="password"
                  onChange={handlePwdInput}
                  value={pwd}
                  placeholder='Password'
                  required
              />
              <span ref={errRef} className={errMsg && "errmsg"}>{errMsg}</span>
              <button className='button'>Log In</button>
          </form>
      </section>
    )

    return content
}
export default Login