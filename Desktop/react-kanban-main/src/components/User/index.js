import React, { useState } from "react";
import avatar from "./avatar.svg";
import chevronDown from "./chevronDown.svg";
//import {useStyles} from '../../style/components';
import './style.css';

const User = (props) => {
    //const classes = useStyles()

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="user">
            <div
                className="user-button"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
                <img
                    src={chevronDown}
                    className={`chevron${isProfileOpen ? " open" : ""}`}
                    alt="chevron"
                />
                <img src={avatar} className="user-avatar" alt="avatar" />
            </div>

            {isProfileOpen && (
                <ul className="user-menu">
                    <li>Profile</li>
                    <li>My tasks</li>
                    <li>Log out</li>
                </ul>
            )}
        </div>
    );
};

export default User;
