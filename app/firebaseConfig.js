import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC7T8w9QYfKqrKJwONXTuKsUIpyafSrTg",
  authDomain: "bus-bi-fbe8e.firebaseapp.com",
  databaseURL: "https://bus-bi-fbe8e-default-rtdb.firebaseio.com",
  projectId: "bus-bi-fbe8e",
  storageBucket: "bus-bi-fbe8e.appspot.com",
  messagingSenderId: "628748704001",
  appId: "1:628748704001:web:c6e4552c644d9be4d2e300",
  measurementId: "G-NPY349HVML",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
