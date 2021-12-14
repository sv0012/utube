import firebase from 'firebase/app';

import 'firebase/auth';


const firebaseConfig = {

    apiKey: "AIzaSyABpuXaOtJITS2MssT7gS7ZH0_XU9sh_MQ",
  
    authDomain: "not-ut.firebaseapp.com",
  
    projectId: "not-ut",
  
    storageBucket: "not-ut.appspot.com",
  
    messagingSenderId: "359489523437",
  
    appId: "1:359489523437:web:c81443744aa863796bc6e4"
  
  };
  

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
