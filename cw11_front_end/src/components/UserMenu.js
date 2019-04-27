import React from 'react';
import {NavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {

    return (
        <div className="user_menu">
            <div>
                Hello, {user.username}!
            </div>
            <div className="user_menu">
                <NavLink to="/add_product" exact>Add product</NavLink>
                <NavLink onClick={logout} to="/" exact>Exit</NavLink>
            </div>
        </div>)
};

export default UserMenu;