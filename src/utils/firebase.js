// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_X1YZ2W,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_V3WB8T,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_P7HK9A,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_S5JD3F,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_U4QM2N,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_Z9XJ7K,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_W0LR5G,
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializar servicios
const storage = getStorage(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { storage, firestore };
