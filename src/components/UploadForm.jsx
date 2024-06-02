import { useState } from 'react';
import { uploadImage } from '../hooks/useImages';
import { useAuth } from '../contexts/AuthContext';
import '../styles/uploadForm.css'; // Asegúrate de importar el archivo CSS

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const { user } = useAuth();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && user) {
      try {
        await uploadImage(file, user.uid);
        setFile(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;



