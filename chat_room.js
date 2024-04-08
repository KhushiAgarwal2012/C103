const firebaseConfig = {
    apiKey: "AIzaSyCnnatJzXLbs97OqC0TyVPyy8xVGs49YmI",
    authDomain: "letschatwebapp-fc367.firebaseapp.com",
    databaseURL: "https://letschatwebapp-fc367-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-fc367",
    storageBucket: "letschatwebapp-fc367.appspot.com",
    messagingSenderId: "824798027566",
    appId: "1:824798027566:web:88279c8d3df16da06ea4bf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "chat_page.html";
}

function getData() 
     {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}