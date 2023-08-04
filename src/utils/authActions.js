import {getFirebaseApp} from "../firebaseHelper";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, child, set,update} from "firebase/database";
import {getStorage} from "firebase/storage";
import {authenticate, logout} from "../../store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUserData} from "./userActions";


//timer variable

let timer;

export const signUp = (firstName, lastName, email, password) => {

    return async dispatch=> {
        console.log(firstName, lastName, email, password)
        const app = getFirebaseApp();
        // Initialize Firebase Authentication and get a reference to the service
        const auth = getAuth(app); // export const auth=firebase.auth();

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            //Getting the user ID that created when user sign in
            const {uid,stsTokenManager} = result.user;

            const {accessToken,expirationTime}=stsTokenManager;

            const expiryDate=new Date(expirationTime)

            const userData = await createUser(firstName, lastName, email, uid)

            dispatch(authenticate({token: accessToken, userData}))

            saveDataToStorage(accessToken,uid,expiryDate);

            console.log("USer Data Stored",userData)

        } catch (error) {
            const errorCode = error.code;
            // console.log(errorCode)
            let message = "Something went wrong";
            if (errorCode === "auth/email-already-in-use") {

                message = "This email is Already in Use"
            }
            throw new Error(message)
        }
    }


//
//
// // Initialize Realtime Database and get a reference to the service
// export const database = getDatabase(app);
//
// // Initialize Firebase Storage and get a reference to the service
// export const storage = getStorage(app);
}

const createUser = async (firstName, lastName, email, userId) => {

    // const firstLast = `${firstName} ${lastName}`.toLowerCase();

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const fName = capitalizeFirstLetter(firstName);
    const lName = capitalizeFirstLetter(lastName);
    const fullName = `${fName} ${lName}`;




    //This object will be saved in the Realtime DB
    const userData = {
        firstName,
        lastName,
        fullName,
        email,
        userId,
        signUpDate: new Date().toISOString()
    };
    //creating a Reference/path to the Firebase Database
    const dbRef = ref(getDatabase());

    //Creating Specific user's path
    const childRef = child(dbRef, `users/${userId}`)

    //Saving User Data in the ChildRef path
    await set(childRef, userData)


    console.log("New Object Created ",userData)

    return userData;

}



export const signIn = (email, password) => {

    return async dispatch=> {
        // console.log(firstName, lastName, email, password)
        const app = getFirebaseApp();
        // Initialize Firebase Authentication and get a reference to the service
        const auth = getAuth(app); // export const auth=firebase.auth();

        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            //Getting the user ID that created when user sign in
            const {uid,stsTokenManager} = result.user;
            const {accessToken,expirationTime}=stsTokenManager;

            const expiryDate=new Date(expirationTime)
            //getting the current time to set timer
            const timeNow=new Date();

            const milisecondsUntilExpiry=expiryDate-timeNow;


            console.log("User ID Sign In ",uid)
            const userData = await getUserData(uid)

            console.log("NEW USER DATA",userData)

            dispatch(authenticate({token: accessToken, userData}))
            saveDataToStorage(accessToken,uid,expiryDate);


            // TODO LOGIN OUT AUTO TIME
            timer=setTimeout(()=>{
                dispatch(userLogout())
            },milisecondsUntilExpiry)

            console.log(userData)

        } catch (error) {
            const errorCode = error.code;
            console.log(errorCode)
            let message = "Something went wrong";

            // auth/user-not-found
            if (errorCode === "auth/user-not-found") {
                message = "The email address you entered was not found in our system. " +
                    "Please ensure that you have entered the correct email address or sign up to create a new account"
            }
            // auth/wrong-password
            if(errorCode === "auth/wrong-password"){
                message ="The password you entered is incorrect";
            }

            throw new Error(message)
        }
    }

}


export const updateSignedInUserData=async (userId, newData)=>{

    console.log("UID After Uploading IMG ",userId)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };




    if(newData.firstName && newData.lastName){
        // const firstLast = `${newData.firstName} ${newData.lastName}`.toLowerCase();

        const fName = capitalizeFirstLetter(newData.firstName );
        const lName = capitalizeFirstLetter(newData.lastName);
        const fullName = `${fName} ${lName}`;

        newData.firstLast=fullName;
    }



    //creating a Reference/path to the Firebase Database
    const dbRef = ref(getDatabase());

    //Creating Specific user's path
    const childRef = child(dbRef, `users/${userId}`)

    //Updating  User Data in the ChildRef path
    await update(childRef, newData)
}

const saveDataToStorage=(token,userId,expiryDate)=>{

    AsyncStorage.setItem("userData",JSON.stringify({
        token,
        userId,
        expiryDate:expiryDate.toString(),
    }))
}


export const userLogout=()=>{

    return async (dispatch)=>{
        AsyncStorage.clear();
        clearTimeout(timer)
        dispatch(logout())
    }


}
