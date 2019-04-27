import React from 'react';
import {NavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {

    return (
        <div className="user_menu">
            <div>
                Привет, {user.username}!
            </div>
            <div className="user_menu">
                <NavLink to="/add_post" exact>Добавить пост</NavLink>
                <NavLink onClick={logout} to="/" exact>Выйти</NavLink>
            </div>
        </div>)
};

export default UserMenu;