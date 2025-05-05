import { Link } from 'react-router-dom';

export default function CIS_Syllabi() {
  return (
    <div>
      <h2>CIS Syllabi</h2>
      <ul>
        <li><Link to="/syllabi/CIS293.pdf">CIS293 - Advanced Technologies</Link></li>
        <li><Link to="/syllabi/CIS296.pdf">CIS296 - C# Development</Link></li>
        <b></b>
        <li><Link to="https://catalog.southeasttech.edu/preview_program.php?catoid=17&poid=2004&hl=%22programming%22">View CIS Corriculum</Link></li>

      </ul>
    </div>
  );
}