// src/components/UploadForm.jsx
import { useState } from 'react';
import { uploadImage } from '../hooks/useImages';
import { useAuth } from '../contexts/AuthContext';

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
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;


