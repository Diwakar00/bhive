import { Phone } from "lucide-react";

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <img
        src="src/assets/bhive-logo.png"
        alt="bhive-logo"
        className="logo"
      ></img>
      <button className="call-btn">
        <Phone size={16} />
      </button>
    </nav>
  </header>
);

export default Header;
