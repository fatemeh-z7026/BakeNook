import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQR2UeAO1ippA-StkOxI3PXYeT5AUxoWM",
  authDomain: "bake-nooke.firebaseapp.com",
  databaseURL: "https://bake-nooke-default-rtdb.firebaseio.com",
  projectId: "bake-nooke",
  storageBucket: "bake-nooke.firebasestorage.app",
  messagingSenderId: "1011440223879",
  appId: "1:1011440223879:web:f519f61fd10045595d1a22",
  measurementId: "G-WG88RTPZ67",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
