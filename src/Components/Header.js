import "../App.css";

function Header() {
    return (
        <div >

            <div id="header-wrapper">
                <div id="header" class="container">
                    <div id="logo">
                        <h1><a href="#">ABDUL WAQAR</a></h1>
                        <p>Design by <a href="#" rel="nofollow">TEMPLATED</a></p>
                    </div>

                </div>
                <div id="menu" class="container">
                    <ul>
                        <li class="current_page_item"><a href="/home" >Homepage</a></li>
                        <li><a href="/about"  >About Us</a></li>
                        <li><a href="/contact" >Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
