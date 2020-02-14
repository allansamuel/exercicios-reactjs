import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyD-06PIlnQT-vPGeFdSKfNCmBQ1ONEMxwk",
authDomain: "marioplan-netninja-based.firebaseapp.com",
databaseURL: "https://marioplan-netninja-based.firebaseio.com",
projectId: "marioplan-netninja-based",
storageBucket: "",
messagingSenderId: "941497377756",
appId: "1:941497377756:web:410a943bcd6c1b627ee519"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;