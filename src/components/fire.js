import React, { Component } from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCoI_Hy_IJsXqDp_CtkdD1K81sqvTnzx7E",
  authDomain: "khana-shana-2020.firebaseapp.com",
  databaseURL: "https://khana-shana-2020.firebaseio.com",
  projectId: "khana-shana-2020",
  storageBucket: "khana-shana-2020.appspot.com",
  messagingSenderId: "734527584801",
  appId: "1:734527584801:web:f6cda3a79788e9af12c160",
  measurementId: "G-SC8N0VD5FC"
};

class firebase_integration extends Component {
  constructor() {
      super()
      firebase.initializeApp(firebaseConfig);
      this.database = firebase.firestore();
      this.storage = firebase.storage();
      this.facebookProvider = new firebase.auth.FacebookAuthProvider().addScope('user_birthday').addScope('user_gender');
      this.auth = firebase.auth()
  }

  getImageURL(divID, mainreferencefolder, path, imagename) {
    this.storage.ref(mainreferencefolder).child(path+'/'+imagename).getDownloadURL().then(function(url) {
        document.getElementById(divID).src = url;
    })
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
}

logout() {
    return this.auth.signOut();
}

async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    this.auth.currentUser.sendEmailVerification();
    return this.auth.currentUser.updateProfile({
        displayName: name,
        // email: email,
        // password: password
    })
}

passwordreset(email) {
    return this.auth.sendPasswordResetEmail(email).then(function () {
        alert("Email Sent!")
    }).catch(function(error) {
        alert(error.message)
    });
}


isInitialized() {
    return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
    })
}

doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

getCurrentUsername() {
    // alert(this.auth.currentUser.displayName)
    return this.auth.currentUser && this.auth.currentUser.displayName
}

getDisplayName() {

    var name = this.auth.currentUser.displayName;
    console.log(name);
    var nameArr = name.split(' ');
    console.log(nameArr);
    return nameArr[0];
}


doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
        url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

addFeedback(CustomerID_par, Date_par, Rating_par, Subject_par, Message_par){
    this.database.collection('CustomerSupport').add({
        CustomerID: CustomerID_par,
        Date: Date_par,
        Rating: Rating_par,
        Subject: Subject_par,
        Message: Message_par
    }).catch(function(error) {
            alert(error.message)
        });
	}
}

export default new firebase_integration();