import { initializeApp } from "firebase/app";

export default function firebaseApp(){
    const firebaseConfig = {
        apiKey: "AIzaSyC05WCwPFrxDI_TZug9PGq6buoFP3cSDcw",
        authDomain: "egirl-chatting-6dd25.firebaseapp.com",
        projectId: "egirl-chatting-6dd25",
        storageBucket: "egirl-chatting-6dd25.appspot.com",
        messagingSenderId: "323864117588",
        appId: "1:323864117588:web:0e13bc34be4426f7b208c1",
        measurementId: "G-47N0QDBLY2"
      };      
      return initializeApp(firebaseConfig)
}

