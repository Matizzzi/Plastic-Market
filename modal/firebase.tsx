// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importar también el servicio de autenticación
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDauDRuyrDBvcYRDEgJRNvLitencmFr_1A",
  authDomain: "plasticmarket-1cd07.firebaseapp.com",
  projectId: "plasticmarket-1cd07",
  storageBucket: "plasticmarket-1cd07.appspot.com",
  messagingSenderId: "458790848814",
  appId: "1:458790848814:web:3acfb8a5d3eecf3e2d92bf",
  measurementId: "G-2X3B8D8BQ1",
};

// Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);

// Exportar servicios para usarlos en el proyecto
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
