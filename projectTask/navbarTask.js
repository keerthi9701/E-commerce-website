import { Link, useNavigate } from 'react-router-dom';

import '../Components/navbar.css'
function Navbar() {
  const navigate = useNavigate();
  const navigatetocart = () => {
    navigate('/cart')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="nav container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products' href="#">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to='/cart' aria-disabled="true" onClick={navigatetocart}>cart</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to='/Register'>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Login' href="#">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;