import { NavLink }  from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">

            <div className="logo">

                <div className="logo-icon">
                    <div className="f-vertical"></div>
                    <div className="f-top"></div>
                    <div className="f-middle"></div>
                </div>

                <h2>FIXORA</h2>

            </div>

            <div className="nav-links">

                <NavLink to="/" end className={({isActive}) => isActive? "isActive" : ""}>Home</NavLink>
                <NavLink to="/services" 
                className={({isActive}) => isActive? "isActive" : ""}>Services</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive? "isActive" : ""}>Contact</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive? "isActive" : ""}>About</NavLink>

            </div>

        </nav>
    );
};

export default Navbar;