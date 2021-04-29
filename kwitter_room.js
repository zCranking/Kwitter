var firebaseConfig = {
    apiKey: "AIzaSyBAgTJb-KJMlOz_Amk5SJVZIr4h79oCTI4",
    authDomain: "fritter-9a97d.firebaseapp.com",
    databaseURL: "https://fritter-9a97d-default-rtdb.firebaseio.com",
    projectId: "fritter-9a97d",
    storageBucket: "fritter-9a97d.appspot.com",
    messagingSenderId: "184827457541",
    appId: "1:184827457541:web:aeff9d3a28dfc74cc8ac6c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;
function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding a rooom!"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
};
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage("room_name", name);
  window.location = "kwitter_page.html";
};
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
};