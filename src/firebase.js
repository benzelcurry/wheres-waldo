import { initializeApp } from 'firebase/app';
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaQpnXFVozA-hP8SHsFXBH_CA0E0BEFW0",
  authDomain: "wheres-waldo-at.firebaseapp.com",
  projectId: "wheres-waldo-at",
  storageBucket: "wheres-waldo-at.appspot.com",
  messagingSenderId: "998831103944",
  appId: "1:998831103944:web:77b57f1271541ba8052afd"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();