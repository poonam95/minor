var config = {
    apiKey: "AIzaSyCkCcAZlkz7FpBVhtissjwLfd6aqURm1P4",
    authDomain: "swachh-india-5e4b9.firebaseapp.com",
    databaseURL: "https://swachh-india-5e4b9.firebaseio.com",
    projectId: "swachh-india-5e4b9",
    storageBucket: "swachh-india-5e4b9.appspot.com",
    messagingSenderId: "946892545995"
  };
  firebase.initializeApp(config);   

var rootRef = firebase.database().ref().child("Problem");
var storage = firebase.storage();
var storageRef = storage.ref();
var sortBy;



sortByAllProblems();

function loadPage(sortBy){

	console.log(sortBy);

rootRef.orderByChild(sortBy).on("child_added", snap => {
    
    var name  = snap.child("Name").val();
    var email = snap.child("Email").val();
    var desc = snap.child("Description").val();
    var city = snap.child("City").val();
    var addr = snap.child("Address").val();
    var rating = snap.child("Rating").val();
    var image = snap.child("Image").val();

    

//    firebase.auth().signInAnonymously().then(function() {

    //console.log('Before requesting download URL');
    storageRef.child(image).getDownloadURL().then(function(url) {
    //console.log('Got download URL');
        
        
        
    document.querySelector('img').src = url;
        
    }).catch(function(error) {
    // If anything goes wrong while getting the download URL, log the error
    console.error(error);
    });
    //console.log('After requesting download URL');

    //});

    
    $("#table_body").append("<tr><td>" + '<img alt="" height=100 width=100></img>' + "</td><td>" + email + "</td><td>" + city + "</td><td>" + addr + "</td><td>" + desc + "</td><td>" + rating + "</td></tr>");

    	console.log(sortBy + "hello");

});

	//document.querySelector("#areaWise").addEventListener ("click", SortByArea);


}

function SortByArea(){

	console.log("area");

	sortBy = 'City';
	  //firebase.initializeApp(config);   

	//document.getElementById('table_body').innerHTML = "";  
	$("#table_body").empty();

	loadPage(sortBy);
}

function SortByRating(){

	console.log("rating");

	sortBy = 'Rating';
	  //firebase.initializeApp(config);   
	$("#table_body").empty();

	loadPage(sortBy);
}

function sortByAllProblems(){

	console.log("all prob");

	sortBy = 'Name';
		$("#table_body").empty();


	loadPage(sortBy);
}