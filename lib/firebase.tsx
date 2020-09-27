import firebase from 'firebase'

const firebaseConfig = process.env.FIREBASE_CONFIG
firebase.initializeApp(firebaseConfig)

export const db = firebase.database()
