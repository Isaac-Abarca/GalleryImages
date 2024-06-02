// src/App.js
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Galería de Imágenes</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
