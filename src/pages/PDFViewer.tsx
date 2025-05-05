import { useParams } from 'react-router-dom';

export default function PDFViewer() {
  const { filename } = useParams();
  return (
    <div>
      <h2>Viewing: {filename}</h2>
      <iframe
        src={`/syllabi/${filename}`}
        width="100%"
        height="600px"
        title="PDF Viewer"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}
