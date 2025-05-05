import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import CIS_Syllabi from './pages/CIS_Syllabi';
import PDFViewer from './pages/PDFViewer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cis_syllabi" element={<CIS_Syllabi />} />
          <Route path="/syllabi/:filename" element={<PDFViewer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;