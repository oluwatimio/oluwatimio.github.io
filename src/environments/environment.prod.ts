import * as firebase from 'firebase/app'
export const environment = {
  production: true,
  config: {
    apiKey: "AIzaSyCKjbrxmsRC1Tft64RU2eiqF1dM8rQ8CNM",
    authDomain: "timiowourocom.firebaseapp.com",
    databaseURL: "https://timiowourocom.firebaseio.com",
    projectId: "timiowourocom",
    storageBucket: "timiowourocom.appspot.com",
    messagingSenderId: "964710175115",
    appId: "1:964710175115:web:7c57a2576d7a3f5da1df8e"
  }
};
firebase.initializeApp(environment.config);
