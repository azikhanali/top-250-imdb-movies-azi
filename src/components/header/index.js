import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="headerContent flex align-center space-between">
                   <div className="logIn flex align-center space-between">
                     <Link to="/"><h3>log in</h3></Link>
                     <Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link>
                    </div>
                    <div className="logo flex align-center space-between">
                    <img src="images/imdblogo.jpg"/>
                    <h5>TOP 250 IMDB MOVIES</h5>
                    </div>
                </div>
            </div>
       </div>
    )
}