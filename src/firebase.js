import firebase from 'firebase/app';

import 'firebase/auth';


const firebaseConfig = {

  apiKey: "AIzaSyCRmy5AoHkbLBElUBu-3wgcl0jGlfLFRlo",

  authDomain: "ut-not.firebaseapp.com",

  projectId: "ut-not",

  storageBucket: "ut-not.appspot.com",

  messagingSenderId: "603228213391",

  appId: "1:603228213391:web:2ce00dca4a673f285260fa"

  
  };
  

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
