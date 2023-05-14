import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-black text-white p-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                            <li><Link>Home</Link> </li>
                            <li><Link>Coffee</Link> </li>
                            <li><Link>Blog</Link> </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-5xl tracking-tighter">BARISTA</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold">
                        <li><Link to='/'>Home</Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                        <Link to='/login'><button className='btn bg-white text-black font-bold hover:bg-white ' onClick={userLogOut}>Log Out</button></Link>
                        :
                        <Link to='/login'><button className='btn btn-primary'>Log In</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;