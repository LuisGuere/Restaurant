import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Restaurante</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navegación</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/menu">Menú</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/reservation">Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/order">Order</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </div>
        </nav>

    );
};

export default Navbar;