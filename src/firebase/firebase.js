import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDMH5exwsm2DJ0HMheMgd-KCs2Aw1iow80",
    authDomain: "linkedin-clone-4bf0b.firebaseapp.com",
    projectId: "linkedin-clone-4bf0b",
    storageBucket: "linkedin-clone-4bf0b.appspot.com",
    messagingSenderId: "77442086058",
    appId: "1:77442086058:web:989a80ba253e5406da8cd3"
  };
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  export { db, auth, provider, storage  }