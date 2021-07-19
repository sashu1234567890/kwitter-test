//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name : user_name,
message:msg,
like:0
      });
      document.getElementById("msg").value= ""
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();