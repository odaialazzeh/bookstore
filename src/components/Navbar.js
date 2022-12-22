import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>

    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/bookstore">BOOKS</Link>
        </li>
        <li>
          <Link to="/bookstore/CATEGORIES">CATEGORIES</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Navbar;
