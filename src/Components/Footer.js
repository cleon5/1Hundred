import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='Footer'>
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/login" className="nav-link px-2 text-muted">Login</NavLink></li>
                <li className="nav-item"><NavLink to="/login" className="nav-link px-2 text-muted">About</NavLink></li>
            </ul>
            <p className="text-center text-muted">2023 - 1Hundred</p>
        </footer>
    </div>
  )
}

export default Footer