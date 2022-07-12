import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'



const Navbar = () => {
    return (
        <>
            <nav className={classes.primaryNavbar}>
                <NavLink to='/' className='default'
                activeclassname='active'
                >
                    All
                </NavLink>
                <NavLink to='/active' className='default'
                activeclassname='active'
                >
                    Active
                </NavLink>
                <NavLink to='/Finished' className='default'
                activeclassname='active'
                >
                    Finished
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;
