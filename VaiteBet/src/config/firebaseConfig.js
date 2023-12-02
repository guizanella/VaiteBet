import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCndmGEyYKD5m3FtRx5mt79wnxhBGCkquk",
    authDomain: "vaitebet10.firebaseapp.com",
    databaseURL: "https://vaitebet10-default-rtdb.firebaseio.com",
    projectId: "vaitebet10",
    storageBucket: "vaitebet10.appspot.com",
    messagingSenderId: "408183748398",
    appId: "1:408183748398:web:e30fe62ab93e57c7a4acbf"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };