import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6T86m1W6144916FYwRe_rGL61GSxgX2M",
  authDomain: "engineer-s-e-library.firebaseapp.com",
  projectId: "engineer-s-e-library",
  storageBucket: "engineer-s-e-library.appspot.com",
  messagingSenderId: "643403113917",
  appId: "1:643403113917:web:9250979c98ee0ff6685ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, dob, phone, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      name,
      dob,
      phone,
      email,
      avatar: "",
    });
    await setDoc(doc(db, "Favourites", user.uid), { items: [] });
    await setDoc(doc(db, "MyBooks", user.uid), { items: [] });
    await setDoc(doc(db, "MyCart", user.uid), { items: [] });
    await setDoc(doc(db, "MyOrders", user.uid), { items: [] });
    toast.success("Account created successfully!");
  } catch (error) {
    console.error("Firebase signup error:", error);
    toast.error("Failed to create an account: " + error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (error) {
    console.error("Firebase login error:", error);
    toast.error("Failed to login: " + error.message);
  }
};

export { signup, login, db };
