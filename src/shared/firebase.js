import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/messaging'
let config =  {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
};

export const fire = firebase.initializeApp(config);

// RTDB config
export const db =  firebase.database();

//fireStore Config
let firestoreInit = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestoreInit.settings(settings);

export const firestore = firestoreInit;



// auth config
export const auth =  fire.auth();

firebase.messaging().usePublicVapidKey("");
// messaging config
export const messaging = firebase.messaging();



// querySnapshot to list

export function snapShotToList(querySnapshot) {
	let list = [];
	querySnapshot.forEach( doc => {
		list.push({ uid : doc.id, data : doc.data()});
	});
	return list;
};