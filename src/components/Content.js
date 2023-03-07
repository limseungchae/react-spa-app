import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import Stuff from "../pages/Stuff";
import Contact from "../pages/Contact";
import NoPath from "../pages/NoPath";
import BookDetail from "../pages/BookDetail";
const Content =() => {
    return (
    <ul className="content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/stuff' element={<Stuff/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/books/:id' element={<BookDetail/>}/>


            <Route path='*' element={<NoPath/>}/>
        </Routes>
    </ul>
    );
}

export default Content;