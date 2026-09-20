import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepagentai.firebaseapp.com",
  projectId: "prepagentai",
  storageBucket: "prepagentai.firebasestorage.app",
  messagingSenderId: "337151269050",
  appId: "1:337151269050:web:25d2bd1808d4c9b5374a83",
  measurementId: "G-4HR7K1QX5G"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const provider =new GoogleAuthProvider()

export{auth ,provider}