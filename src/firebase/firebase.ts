import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCpdnzs3enSuxUEOznjh7ewoqzc2TWppU',
  authDomain: 'carefinder-web-app.firebaseapp.com',
  projectId: 'carefinder-web-app',
  storageBucket: 'carefinder-web-app.appspot.com',
  messagingSenderId: '82728098998',
  appId: '1:82728098998:web:f2c15e3168e935c7349a17',
  measurementId: 'G-X6NQRKRWSW'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { db, auth }
