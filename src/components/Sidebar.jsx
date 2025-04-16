import { NavLink } from 'react-router-dom';
import anh from '../assets/Lab_05/Group.png'
import logo from '../assets/Lab_05/Image 1858.png'

function Sidebar() {
    return (
        <div className="col-auto bg-light vh-100 p-4" style={{ width: '250px' }}>
            <img  className='' src={logo} alt="" />
            
            <ul className="nav flex-column mt-4">
                <li className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/teams"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
                    >
                        Teams
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/analytics"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
                    >
                        Analytics
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/messages"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
                    >
                        Messages
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/integrations"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active text-white rounded' : 'nav-link text-dark'
                        }
                        style={({ isActive }) => (isActive ? { backgroundColor: '#f54983' } : {})}
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