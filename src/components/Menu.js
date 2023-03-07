import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import Stuff from "../pages/Stuff";
import Contact from "../pages/Contact";
import NoPath from "../pages/NoPath";
import {Link, NavLink} from "react-router-dom";
const Menu =() => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stuff">Stuff</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </nav>
    );
}

export default Menu;