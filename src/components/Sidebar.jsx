import { NavLink } from 'react-router-dom';
import anh from '../assets/Lab_05/Group.png'
import logo from '../assets/Lab_05/Image 1858.png'

function Sidebar() {
    return (
        <div className="col-auto bg-light vh-100 p-4" style={{ width: '250px' }}>
            <img className='' src={logo} alt="" />

            <ul className="nav flex-column mt-4">
                <li className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className="nav-link active text-white rounded"
                        style={{ backgroundColor: '#f54983' }}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className="nav-link text-dark"
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/teams"
                        className="nav-link text-dark"
                    >
                        Teams
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/analytics"
                        className="nav-link text-dark"
                    >
                        Analytics
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/messages"
                        className="nav-link text-dark"
                    >
                        Messages
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/integrations"
                        className="nav-link text-dark"
                    >
                        Integrations
                    </NavLink>
                </li>
            </ul>


            <div className="mt-5 d-flex flex-column" >
                <img className='mt-5' src={anh} alt="" />
                <button className='btn btn-outline-primary mt-2' >Try now</button>
            </div>
        </div>


    );
}

export default Sidebar;