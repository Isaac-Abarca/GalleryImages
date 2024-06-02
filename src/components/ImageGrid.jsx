// src/components/ImageGrid.jsx
import { useImages } from '../hooks/useImages';
import { useAuth } from '../contexts/AuthContext';

const ImageGrid = () => {
  const { user } = useAuth();
  const images = useImages(user ? user.uid : null); // Pasa null si no hay usuario

  if (!user) {
    return <div>Please log in to view your images.</div>;
  }

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="uploaded" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
