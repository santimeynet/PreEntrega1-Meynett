import { NavLink, Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import './NavBar.css'

// ... (importaciones y código previo)

const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to="/">
          <h3 className="title">Grizzlyman Gear</h3>
        </Link>
        <div className="Categories">
          <NavLink to="/category/pouch" className="Option" activeclassname="ActiveOption">
            Pouchs
          </NavLink>
          <NavLink to="/category/chest" className="Option" activeclassname="ActiveOption">
            Chest Rigs
          </NavLink>
          <NavLink to="/category/carrier" className="Option" activeclassname="ActiveOption">
            Plate Carriers
          </NavLink>
        </div>
        <CartWidget />
      </nav>
    );
  };
  
  export default NavBar;
  