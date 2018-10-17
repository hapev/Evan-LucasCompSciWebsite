if (sessionStorage.getItem("loggedIn")==="yes"){
    document.getElementById("loginTab").textContent="Logout";
}
if (sessionStorage.getItem("firstName")!=""&&sessionStorage.getItem("firstName")!=null){
document.getElementById("welcome").innerHTML="Welcome " + sessionStorage.getItem("firstName")+ "!";
}

function submitId(){

var firstNameIn = document.getElementById("FirstNameInput").value;
var lastNameIn = document.getElementById("LastNameInput").value;
var loggedInBoolean = "yes";
sessionStorage.setItem("firstName",firstNameIn);
sessionStorage.setItem("lastName",lastNameIn);
sessionStorage.setItem("loggedIn",loggedInBoolean);
window.location.replace('../index.html');

}


function signedIn(){
    if (sessionStorage.getItem("loggedIn")==="yes"){
               console.log("Called");

        return true;
    }
    return false;
}








function logout(){
    
    if (signedIn()){
        
        var nal = "";
        
        sessionStorage.setItem("firstName",nal);
        sessionStorage.setItem("lastName",nal);
        sessionStorage.setItem("loggedIn",nal);

    }
}



$("#loadIn h1").delay(100).animate({ opacity: 1 }, 1500);
