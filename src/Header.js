
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container" >
               
                    {/* <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" class="food-munch-logo" /> */}
                    <h1>Portfolio</h1>
              
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style={{ marginLeft: "500px" }}>
                        <a class="nav-link active" id="navItem1" href="https://shivportfolio.vercel.app/#service">services</a>
                        <a class="nav-link" href="https://shivportfolio.vercel.app/#about" id="navItem2">About</a>
                        <Link to="/projects" style={{ color: "gray", fontWeight: "500", padding: "6px", textDecoration: "none" }}>Projects</Link>
                        <a class="nav-link" href="https://shivportfolio.vercel.app/#followUsSection" id="navItem4">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header