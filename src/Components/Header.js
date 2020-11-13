import "../App.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div >

            <div id="header-wrapper">
                <div id="header" class="container">
                    <div id="logo">
                        <h1>ABDUL WAQAR</h1>
                        <p>Design by TEMPLATED</p>
                    </div>

                </div>
                <div id="menu" class="container">
                    <ul>
                    <nav>
       <li><Link to="/">Home</Link> </li> 
       <li> <Link to="/about">About</Link></li>
       <li> <Link to="/contacct">Contact</Link></li>
      </nav>
                      
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
