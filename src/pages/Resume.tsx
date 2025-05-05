import { Link } from 'react-router-dom';

export default function Resume() {
  return (
    <div>
      <h2>CIS Syllabi</h2>
      <ul>
        <li><Link to="/syllabi/resume.pdf">View My Resume</Link></li>
      </ul>
    </div>
      );
    }