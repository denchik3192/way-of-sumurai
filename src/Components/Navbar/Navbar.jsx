import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

const Navbar = (props) => {
    return (
        
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/musik' activeClassName={s.activeLink}>Musik</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                {/* <div className={s.item}>
                                {props.state.name}
            <img src={props.state.img} alt="logo"/>
        </div> */}
            </div>
        </nav>
    )
}

export default Navbar;