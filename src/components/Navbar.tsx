import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/cis_syllabi">CIS Syllabi</Link>
    </nav>
  );
}