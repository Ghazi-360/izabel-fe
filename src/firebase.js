import { initializeApp } from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB76H8xQuO-ZhXi97CovJzOEw5YkEK0U8s",
    authDomain: "izabel-d5a55.firebaseapp.com",
    projectId: "izabel-d5a55",
    storageBucket: "izabel-d5a55.appspot.com",
    messagingSenderId: "241096878808",
    appId: "1:241096878808:web:9c9d22c979d55f094b85ad",
    measurementId: "G-2G5JFXXLB8"
};
// initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) 
export const googleProvider = new GoogleAuthProvider();
export default app
