var firebaseConfig = {
    apiKey: "AIzaSyBg-sChHSIui57dC2tRCMZIsaRBSlDxhiE",
    authDomain: "first-website-1cf23.firebaseapp.com",
    databaseURL: "https://first-website-1cf23-default-rtdb.firebaseio.com",
    projectId: "first-website-1cf23",
    storageBucket: "first-website-1cf23.appspot.com",
    messagingSenderId: "435364783338",
    appId: "1:435364783338:web:4cf55577d58abba4aba393"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function username() {
username_2 = localStorage.getItem("username");
    document.getElementById('username_logged_in').innerHTML = username_2;
}

    

function addRoom() {
        room = document.getElementById("roomname").value;
        localStorage.setItem("room_name", room);
        firebase.database().ref("/").child(room).update({
            purpose: "adding a room"
      });
      window.location.replace("page.html");
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("roomListNames").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
    row = "<li class='row' onclick='redirect(this.id)' id='" + Room_names + "'> # " + Room_names + "</li>";
    document.getElementById("roomListNames").innerHTML += row;
 //End code
 });});}
getData();

function redirect(name) {
    console.log(name);
    localStorage.setItem("roomname_", name);
    window.location.replace("page.html");
}

