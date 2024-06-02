import { useImages } from '../hooks/useImages';
import { useAuth } from '../contexts/AuthContext';
import '../styles/imageGrid.css'; // Asegúrate de importar el archivo CSS

const ImageGrid = () => {
  const { user } = useAuth();
  const images = useImages(user ? user.uid : null); // Pasa null si no hay usuario

  if (!user) {
    return <div>Please log in to view your images.</div>;
  }

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-wrap">
          <img src={image.url} alt="uploaded" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
