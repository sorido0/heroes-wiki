import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Buscar } from '../../heroes/pages';


export const Navbar = () => {

    const navegar = useNavigate();

    const elogin = () => {
        navegar('/Login',{
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Heroes Wiki App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="Mavel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/Dc"
                    >
                        DC
                    </NavLink>
                </div>
                <Buscar />
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <samp className='navbar-item nav-link text-primary'> 
                        soridoDev 
                        </samp>
                    <button
                        className='nav-item nav-link btn'
                        to="/Login"
                        onClick={elogin}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}