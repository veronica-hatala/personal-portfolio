import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaSass, FaWordpress, FaReact } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-left-box">
                <div className="hero-section-left"> 
                    <p className="section-title">
                        Veronica Hatala
                    </p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Front End
                        </span>{" "}
                        <br />
                        Web Developer
                    </h1>
                    <p className="hero-section-description">
                        Software developer with 3+ years of experience
                    </p>
                </div>
                <div className="hero-section-button-box">
                    <button className="btn btn-primary">Contact</button>
                    <button className="btn btn-primary">Resume</button>    
                </div>
            </div>
            <div className="hero-section-right-box">
                <div className="hero-section-right"> 
                    <div className="hero-section-profile-pic">
                        <img src="./images/veronica-profile-pic.jpg" alt="Veronica's Picture" />
                    </div>
                    <div class="hero-section-stack-container">
                        <IoLogoJavascript />
                        <FaPhp />
                        <FaSass />
                        <FaWordpress />
                        <FaReact />
                    </div>
                </div>
            </div>
        </section>
    )
}