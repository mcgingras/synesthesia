  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqnANgYrB8Yzk-ALHfqdFnk8IDOuwOkjw",
    authDomain: "project-1969575520459744786.firebaseapp.com",
    databaseURL: "https://project-1969575520459744786.firebaseio.com",
    storageBucket: "project-1969575520459744786.appspot.com",
    messagingSenderId: "392218222733"
  };
  firebase.initializeApp(config);

  // Initialize DB
  var database = firebase.database();

  function writeUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      username: name,
    });
  }


firebase.database().ref('/users/' + 1).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  $('#js-user').text(username);
});
