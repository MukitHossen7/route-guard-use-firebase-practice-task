import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByjp7e379WzapOs-35BpP-dfjHep1H3jg",
  authDomain: "route-guard-practice-task.firebaseapp.com",
  projectId: "route-guard-practice-task",
  storageBucket: "route-guard-practice-task.firebasestorage.app",
  messagingSenderId: "788266514383",
  appId: "1:788266514383:web:f3fe441f3e39d4b88404ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
