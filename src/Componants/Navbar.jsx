import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className="link">

            {/* link componants to navbar */}

            <Link className="one" to="/">Login</Link>
            <Link className="two" to="/register">Registration</Link>
            <Link className="three" to="/dashboard">Dashboard</Link>
        </div>
    )
}