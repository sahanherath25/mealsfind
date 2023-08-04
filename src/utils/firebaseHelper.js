
//FireBase DB Configs
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase, ref, set, onValue} from "firebase/database";
import { getStorage } from "firebase/storage";
import { ref  as dbRef} from "firebase/database";



export const getFirebaseApp=()=>{

    // My app's Firebase configuration -Unique for each project
    const firebaseConfig = {
        apiKey: "AIzaSyC8pTHWPYGrwCZ9c49l4Yu-ihy2Nz6ynS8",
        authDomain: "horizon-news-feed.firebaseapp.com",
        projectId: "horizon-news-feed",
        storageBucket: "horizon-news-feed.appspot.com",
        messagingSenderId: "625123867089",
        appId: "1:625123867089:web:8e46dc178fdeb3e82fc8f0",
        databaseURL: "https://horizon-news-feed-default-rtdb.firebaseio.com",
    };

    return initializeApp(firebaseConfig)
}

