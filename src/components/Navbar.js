import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SEVA</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/ngos">NGOs</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
