import ImageGrid from '../components/ImageGrid';
import UploadForm from '../components/UploadForm';
import { useAuth } from '../contexts/AuthContext';
import '../styles/gallery.css'; // Asegúrate de importar el archivo CSS

const Gallery = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your gallery.</div>;
  }

  return (
    <div className="gallery-container">
      <h1>Welcome to Your Image Gallery, {user.email}</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Gallery;

