import { useState, useEffect } from 'react';
import { firestore, storage } from '../utils/firebase';
import { onSnapshot, query, orderBy, collection, deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

const ImageGrid = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'images'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach(doc => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id, url) => {
    const docRef = doc(firestore, 'images', id);
    await deleteDoc(docRef);
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  };

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.url} alt="uploaded pic" />
          <button onClick={() => handleDelete(doc.id, doc.url)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

