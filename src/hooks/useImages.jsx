// src/hooks/useImages.js
import { useState, useEffect } from 'react';
import { firestore, storage } from '../services/firebase';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const useImages = (userId) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const q = query(collection(firestore, 'images'), where('userId', '==', userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const imageData = [];
      querySnapshot.forEach((doc) => {
        imageData.push({ ...doc.data(), id: doc.id });
      });
      setImages(imageData);
    });

    return () => unsubscribe();
  }, [userId]);

  return images;
};

export const uploadImage = async (file, userId) => {
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      // eslint-disable-next-line no-unused-vars
      (snapshot) => {
        // Progress...
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(firestore, 'images'), {
            url: downloadURL,
            userId,
            createdAt: serverTimestamp()
          }).then(resolve).catch(reject);
        });
      }
    );
  });
};
