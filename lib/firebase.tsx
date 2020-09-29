import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)}

export const db = firebase.database()
