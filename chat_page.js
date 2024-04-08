const firebaseConfig = {
    apiKey: "AIzaSyCnnatJzXLbs97OqC0TyVPyy8xVGs49YmI",
    authDomain: "letschatwebapp-fc367.firebaseapp.com",
    databaseURL: "https://letschatwebapp-fc367-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-fc367",
    storageBucket: "letschatwebapp-fc367.appspot.com",
    messagingSenderId: "824798027566",
    appId: "1:824798027566:web:88279c8d3df16da06ea4bf"
};

firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";

}
