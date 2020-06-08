///SETTING UP FIREBASE CONFIGURATION

import firebase from "firebase/app"
import 'firebase/database'
import 'firebase/auth'

const FirestoreConfig = {
    projectId: process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL
}

firebase.initializeApp(FirestoreConfig);
export default firebase
