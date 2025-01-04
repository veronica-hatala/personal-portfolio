import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { to: "heroSection", label: "🌸Home🌸" },
  { to: "AboutMe", label: "✨About✨" },
  { to: "mySkills", label: "🏵️Portfolio🏵️" },
  { to: "Contact", label: "💗Contact💗" },
];

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) closeMenu();
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <button className="nav__hamburger" onClick={toggleNav}>
        {navActive ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={to}
                className="navbar--content"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
