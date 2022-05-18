import Link from "next/link";
import styles from '../styles/Navbar.module.css';
function Header() {
  return (
    <>
    <br/><br/>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div id="navbarNav" className={styles.nav}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link active"  >
                  Home
                </a>
              </Link>
            </li>
         
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link active" aria-current="page">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link active" aria-current="page">
                  Products
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link active" aria-current="page">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>

      </div>
    </nav>
      </div >
    </>
  );
}
export default Header;
