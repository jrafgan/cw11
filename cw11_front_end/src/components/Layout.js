import React from 'react';
import {NavLink} from "react-router-dom";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Layout = ({user, logout}) => {

    return (
        <div className="main_nav">
            <h2 className="h2">Forum</h2>
            <div><NavLink to="/">Main</NavLink></div>
            {user ?
                <UserMenu user={user} logout={logout}/> : <AnonymousMenu/> }
            <div><NavLink to="/post_info"/></div>
        </div>
    )
};


export default Layout;