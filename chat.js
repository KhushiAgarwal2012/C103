// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



