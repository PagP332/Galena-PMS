import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi78LGsVt-CZ2LxsDtPn3ai43PZvo39eM",
  authDomain: "galena-pms.firebaseapp.com",
  projectId: "galena-pms",
  storageBucket: "galena-pms.firebasestorage.app",
  messagingSenderId: "982109852222",
  appId: "1:982109852222:web:26ec2e6699e5e58528b76f",
  measurementId: "G-R063QCH9B2",
  databaseURL: "https://Galena-PMS.nam5.firebasedatabase.app",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app)

function test() {
  console.log("test")
}

exports = { app, analytics, database, test }
