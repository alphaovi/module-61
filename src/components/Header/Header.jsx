import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("Signed Out");
        })
        .catch(error => {
            console.log("Log out failed");
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                {
                    user && <Link to="/orders">Orders</Link>
                }
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <Link><button onClick={handleLogOut}>Log Out</button></Link>
                }
                
            </div>
        </nav>
    );
};

export default Header;