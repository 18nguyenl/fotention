import firebase from "firebase";
var config = {
  apiKey: "AIzaSyD_TEuE5BNmvOdv5kSFtWvgwpOajchXrnk",
  authDomain: "fotention.firebaseapp.com",
  databaseURL: "https://fotention.firebaseio.com",
  projectId: "fotention",
  storageBucket: "fotention.appspot.com",
  messagingSenderId: "909808418455"
};
firebase.initializeApp(config);
export default firebase;