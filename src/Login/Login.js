import React, { useContext } from 'react'
import img from '../image/login page.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Login = () => {
    const { logIn, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const handleLogIn = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                navigate(from, {replace: true})
            })
            .catch(err => console.log(err))
    }
    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result => {
            const user = result.user
            navigate(from, {replace: true})
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2 mb-0 pb-0">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='w-full px-7 mt-0 pt-0'>
                        <button onClick={handleGoogleLogIn} className="btn btn-primary w-full">Google Log In</button>
                    </div>
                    <p className='px-7 mt-2 mb-5'>New to this site. Please <Link to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login