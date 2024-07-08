import React from 'react';

export const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#" className="notification"><i className="fas fa-bell"></i></a></li>
                <li>
                    <div className="green-box">
                        <span className="green-box-text">{title}</span>
                    </div>
                </li>
                <li><a href="#" className="exit"><i className="fas fa-sign-out-alt"></i></a></li>
            </ul>
        </div>
    );
};
