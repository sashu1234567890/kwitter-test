//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBTrsgAGvHxrDH5hyezg9JT4desg2eMK3I",
      authDomain: "kwitter-b8ec1.firebaseapp.com",
      databaseURL: "https://kwitter-b8ec1-default-rtdb.firebaseio.com",
      projectId: "kwitter-b8ec1",
      storageBucket: "kwitter-b8ec1.appspot.com",
      messagingSenderId: "578861755370",
      appId: "1:578861755370:web:50343740e96375c88f6093",
      measurementId: "G-RKM5RB7DD5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names+ " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name)
{
     console.log(name) ;
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout()
      {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
      }
