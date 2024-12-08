import React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/neon-gradient.avif';
import axios from 'axios';
import Swal from 'sweetalert2';
import localStorage from '../../../utils/localstorage';


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3000/api/user/getUser",{email, password})
        .then(result => {console.log(result)
            if (result.data.message === "User found successfully") {
                const token = result.data.token;
                localStorage.setItem('authToken', token);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: result.data.message,
                    timer: 2000, // Auto close after 2 seconds
                    showConfirmButton: false
                });
                axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: result.data.message,
                });
            }
        })
        .catch(err => {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
            });
        });
      }
    return (
        <div className='py-20 px-4'>
            <div className='overflow-hidden rounded-2xl grid sm:grid-cols-2 grid-cols-1 max-w-4xl m-auto'
                style={{ boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px" }}
            >
                <div
                    className='hidden backdrop-blur-sm w-full h-100 sm:flex items-center justify-center text-white text-2xl font-bold'
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    Social Welfare
                </div>

                <div className='p-10 bg-white'>
                    <h3 className='text-center mb-8 text-2xl text-slate-600 '>Hello! Welcome Back</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col mb-4'>
                            <label className='text-slate-500 font-semibold mb-2' htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                className='shadow-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out'
                                placeholder='Enter your email'
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='text-slate-500 font-semibold mb-2' htmlFor="password">Password</label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                className='shadow-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out'
                                placeholder='Enter your password'
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" id='remember-me' />
                                <label className='text-slate-500' htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link to='/' className='text-blue-500 hover:underline'>Reset Password</Link>
                        </div>
                        <button type='submit' className='p-2 my-4 text-center w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded'>Login</button>
                        <div className='text-center'>
                            <span className='text-sm text-slate-500'>Don't have an account? </span>
                            <Link to='/signup' className='text-blue-500 hover:underline whitespace-nowrap'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
