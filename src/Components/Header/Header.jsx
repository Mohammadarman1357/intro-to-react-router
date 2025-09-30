import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (

        <div>
            <h1>This is Header here</h1>

            {/* <nav>
                <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptop">Laptop</a>
                <a href="">Service</a>
            </nav> */}

            {/* <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/mobiles'}>Mobiles</Link>
                <Link to={'/laptop'}>Laptop</Link>
            </nav>
             */}

            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/mobiles'}>Mobiles</NavLink>
                <NavLink to={'/laptop'}>Laptop</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/users2'}>Users2</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </nav>

        </div>

    );
};

export default Header;
