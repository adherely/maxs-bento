import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyABGiaFVjY9zChu12o6CjW4QAYjUOacsCA",
  authDomain: "new-adherely-2e51d.firebaseapp.com",
  databaseURL: "https://new-adherely-2e51d.firebaseio.com",
  projectId: "new-adherely-2e51d",
  storageBucket: "new-adherely-2e51d.appspot.com",
  messagingSenderId: "638226919184",
  appId: "1:638226919184:web:5e29c923d0d6d332"
};

firebase.initializeApp(config)
