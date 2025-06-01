import { Phone } from "lucide-react";

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <img src="/assets/bhive-logo.png" alt="bhive-logo" className="logo"></img>
      <button className="call-btn">
        <Phone />
      </button>
    </nav>
  </header>
);

export default Header;
