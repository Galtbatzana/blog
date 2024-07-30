import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";

export function Footer () {
    return (
        <div className="bg-red-500">
            <div>
                About
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <div>
                <p>Email : info@jstemplate.net</p>
                <p>Phone : 880 123 456 789</p>
            </div>
            <div>
            <FaFacebook />
            <FaTwitter />
            <LuInstagram />
            <FaLinkedin />
            </div>
        </div>
    );
}

