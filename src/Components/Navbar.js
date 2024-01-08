import './Navbar.css';

function Nav() {
  return (
    <div className="nav-container">
        <img src={require('../Img/logo1.png')} width='25'></img>
        <a>Form</a>
        <a>Latest Update</a>
        <a>Community</a>
        <a>About Us</a>
        <a>Contact Us</a>
    </div>
  );
}

export default Nav;
