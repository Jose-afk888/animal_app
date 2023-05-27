import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqfO5eAQOU9jmWGp6I_kzCNdjLC7ThGhg",
  authDomain: "animalslife-30e41.firebaseapp.com",
  projectId: "animalslife-30e41",
  storageBucket: "animalslife-30e41.appspot.com",
  messagingSenderId: "471069137326",
  appId: "1:471069137326:web:99931c9a4012ec9c74103f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };