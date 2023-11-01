//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDUJ5mUqpnGu01BjWmaTfZTxC8_NXlWIqs", authDomain: "class-93-72af2.firebaseapp.com", databaseURL: "https://class-93-72af2-default-rtdb.firebaseio.com", projectId: "class-93-72af2", storageBucket: "class-93-72af2.appspot.com", messagingSenderId: "729482202889", appId: "1:729482202889:web:fdee7850ae9eba2c6ccdd8", measurementId: "G-JZ2FV2SN64"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
       name : user_name,
       message : msg,
       like : 0   
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];

    name_with_tag =
    message_with_tag =
    like_button =
    span_with_tag =

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    
//End code
    } });  }); }
getData();

function updateLike() {

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    // window.location = "index.html"
    window.location.replace("index.html");
}