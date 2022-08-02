
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../auth/context';
import { AuthContext } from './../../auth/context/AuthContext';


export const Navbar = () => {

    //con el useContexte y AuthContext podemos hacer a los valores del usuario 
    // Como tenemos acceso al usuria podemos renderizar su nombre 
     const { user, onLogout } = useContext( AuthContext);
     console.log(user)
    
     const navegar = useNavigate();

    const elogin = () => {
        navegar('/Login',{
            replace: true
        });

        onLogout();
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

                    
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/buscar"
                    >
                        Buscar 
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <samp className='navbar-item nav-link text-primary'> 
                        {user?.name} 
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