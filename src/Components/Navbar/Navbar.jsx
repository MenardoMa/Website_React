import { Button } from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  // Link

  const tabLinks = [
    "Home",
    "Program",
    "About us",
    "Campus",
    "Testimonials",
    <Button href="/">Contact us</Button>,
  ];

  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {tabLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
};
