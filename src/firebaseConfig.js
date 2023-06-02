// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAfNF_zUX66XsX3P3DvVKp_o7_aBBRnCt4",
    authDomain: "proyecto-iot-f18db.firebaseapp.com",
    databaseURL: "https://proyecto-iot-f18db-default-rtdb.firebaseio.com",
    projectId: "proyecto-iot-f18db",
    storageBucket: "proyecto-iot-f18db.appspot.com",
    messagingSenderId: "256338910456",
    appId: "1:256338910456:web:97b748871eefa478a1ef0d",
    measurementId: "G-L8819HTHSJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
