import Navbar from "./Navbar";
import './contact.css';

export default function About() {

    return (
        <>
            <Navbar />
            <div className='contact'>
                <ul>
                <li>This is a project created using user-defined React components as well as the MaterialUI library.</li>
                <li>By using react hooks like useState and useEffect, the list updates itself according to user actions and does so without mutating the array of objects used to store the data.</li>
                <li>The list stores it's items in local storage in order to perserve the data.</li>
                </ul>
            </div>
        </>
    )
}