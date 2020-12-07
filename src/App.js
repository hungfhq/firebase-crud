import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgAyiDIcSNIg6HLghxzVIVGTdgUHZkfgE",
  authDomain: "bookmarks-6aec1.firebaseapp.com",
  databaseURL: "https://bookmarks-6aec1.firebaseio.com",
  projectId: "bookmarks-6aec1",
  storageBucket: "bookmarks-6aec1.appspot.com",
  messagingSenderId: "726870367785",
  appId: "1:726870367785:web:dcc1408e1e7ade26ffc638",
  measurementId: "G-8EZGTQVJN4",
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <AllUrl />
    </div>
  );
}

function AllUrl() {
  const temp = getAllCategories();
  temp.then(() => {});
  return null;
}

async function getAllCategories() {
  const db = firebase.firestore();
  const liIds = [];

  const snapshot = await db.collection("collections").get();
  snapshot.docs
    .filter((item) => item.data().name !== "cached")
    .map((doc) => {
      liIds.push(doc.data().name);
    });

  return liIds;
}

export default App;
