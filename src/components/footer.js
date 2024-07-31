import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { Navigationrow, Navigations } from "./Tolgoi";
import Image from "next/image";

export function Footer() {
  return (
    <div className="container mx-auto bg-slate-100 py-16">
        <div className="md:flex"> 
            <div className="hidden md:block md:flex-1 mx-9">
                <div className="text-[#181A2A] font-medium">About</div>
                <div className="text-[#696A75] w-[280px] py-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam
                </div>
                <div className="text-[#696A75]">
                    <p>Email : info@jstemplate.net</p>
                    <p>Phone : 880 123 456 789</p>
                </div>
            </div>

            <div className="flex justify-center">
                <Navigationrow />
            </div>

            <div className="flex gap-5 md:flex-1 justify-center my-6">
                <FaFacebook className="text-[#6D6E76]" />
                <FaTwitter className="text-[#6D6E76]" />
                <LuInstagram className="text-[#6D6E76]" />
                <FaLinkedin className="text-[#6D6E76]" />
            </div>
        </div>
        <div className="my-9 flex justify-center md:justify-between md:mx-16">
            <img src="/images/Logo01.png" className="h-[36px]"/>
            <div className="hidden md:flex gap-6 text-[#3B3C4A]">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
        </div>
      
    </div>
    
  );
}
