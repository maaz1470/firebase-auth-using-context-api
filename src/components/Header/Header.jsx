import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {currentUser, userSignOut} = useContext(AuthContext);

    const userSignout = () => {
        userSignOut();
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost text-xl">daisyUI</a>
                <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
                <Link className="btn btn-ghost text-xl" to="/orders">Orders</Link>
                {currentUser && <Link className="btn btn-ghost text-xl" to="/profile">Profile</Link>}
                {
                    currentUser ? <><span>{currentUser.email}</span> <button className='btn btn-xs' onClick={userSignout}>Sign Out</button></> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;