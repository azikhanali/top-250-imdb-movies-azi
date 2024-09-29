import { Link} from "react-router-dom";
import './style.css';
export default function Footer(){
    return (
        <div className="footer">
            
                <div className="footerContent flex space-between align-center">
                    <div className="contact flex flex-wrap space-between">
                        <Link to="/"><h6>Privacy&Security</h6></Link>
                        <Link to="/"><h6>Contact Us</h6></Link>
                        <Link to="/"><h6>Social Media</h6></Link>
                    </div>
                    <Link to="/"><h4>Application</h4></Link>
                </div>
            
        </div>
    )
}