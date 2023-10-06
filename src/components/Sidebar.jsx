import {NavLink, useLocation} from "react-router-dom"

import "./Sidebar.css"

const Sidebar = () => {
    const location = useLocation();

    const isLinkActive = (path) => {
        return location.pathname === path;
    }

    return(
        <div className="main-content">
            <h1><NavLink to="/" className={isLinkActive("/") ? "active-link" : "inactive-link"}>Home</NavLink></h1>
            <h1><NavLink to="/food" className={isLinkActive("/food") ? "active-link" : "inactive-link"}>Food</NavLink></h1>
            <h1><NavLink to="/exercise" className={isLinkActive("/exercise") ? "active-link" : "inactive-link"}>Exercise</NavLink></h1>
            <h1><NavLink to="/fitness" className={isLinkActive("/fitness") ? "active-link" : "inactive-link"}>Fitness Goals</NavLink></h1>
            <h1><NavLink to="https://github.com/syedmustassim/fitness-tracker" className={isLinkActive("/fitness") ? "active-link" : "inactive-link"}>Github</NavLink></h1>
        </div>
    )
}

export default Sidebar;