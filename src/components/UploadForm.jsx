/* eslint-disable no-unused-vars */
// src/components/UploadForm.jsx
import React, { useState } from 'react';
import { storage, firestore } from '../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const handleUpload = () => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      // Progress function
    }, (error) => {
      setError(error);
    }, async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      const createdAt = serverTimestamp();
      await addDoc(collection(firestore, 'images'), { url, createdAt });
      setFile(null);
    });
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
      {error && <div className="error">{error}</div>}
      {file && <button type="button" onClick={handleUpload}>Upload</button>}
    </form>
  );
};

export default UploadForm;
