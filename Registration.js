function myfun() {
    var First = document.getElementById("First_name").value;
    var Last = document.getElementById("Last_name").value;
    var pass = document.getElementById("Password").value;
    var a = document.getElementById("Email").value;

    if (First == "") {
        document.getElementById("FMessage").innerHTML = "** Please Fill First Name **";
        document.getElementById("FMessage").style.color = "red";
        document.getElementById("First_name").style.border = "red 2px solid";
        document.getElementById("Last_name").style.left = "316px"

        return false;
    }
    if (First.length > 20) {
        document.getElementById("FMessage").innerHTML = "** Please Fill less then 20 charter **";
        document.getElementById("FMessage").style.color = "red";
        document.getElementById("First_name").style.border = "red 2px solid";
        document.getElementById("Last_name").style.left = "253px"
        return false;
    }
    if (!isNaN(First)) {
        document.getElementById("FMessage").innerHTML = "** Please Write only Alphabets **";
        document.getElementById("FMessage").style.color = "red";
        document.getElementById("First_name").style.border = "red 2px solid";
        document.getElementById("Last_name").style.left = "278px"
        return false;
    }
    else {
        document.getElementById("FMessage").innerHTML = "First Name";
        document.getElementById("FMessage").style.color = "white";
    }

    if (Last == "") {
        document.getElementById("LMessage").innerHTML = "** Please Fill Last Name **";
        document.getElementById("LMessage").style.color = "red";
        document.getElementById("Last_name").style.border = "red 2px solid";
        document.getElementById("Last_name").style.left = "417px"
        return false;
    }
    if (Last.length > 20) {
        document.getElementById("LMessage").innerHTML = "** Please Fill less then 20 charter **";
        document.getElementById("LMessage").style.color = "red";
        document.getElementById("Last_name").style.border = "red 2px solid";
        return false;
    }
    if (!isNaN(Last)) {
        document.getElementById("LMessage").innerHTML = "** Please Write only Alphabets **";
        document.getElementById("LMessage").style.color = "red";
        document.getElementById("Last_name").style.border = "red 2px solid";
        return false;
    }
    else {
        document.getElementById("LMessage").innerHTML = "Last Name";
        document.getElementById("LMessage").style.color = "white";
    }

    if (pass == "") {
        document.getElementById("LPassword").innerHTML = "** Please Fill Password **";
        document.getElementById("Password").style.border = "red 2px solid";
        return false;
    }
    if (pass.length < 6) {
        document.getElementById("LPassword").innerHTML = "** Password must be greaterthen 6 charcter **";
        document.getElementById("Password").style.border = "red 2px solid";
        return false;
    }
    if (pass.length > 10) {
        document.getElementById("LPassword").innerHTML = "** Password must be less then 10 charcter **";
        document.getElementById("Password").style.border = "red 2px solid";
        return false;
    }
    if (a == pass) {
        document.getElementById("LPassword").innerHTML = "** Password and username are same **";
        document.getElementById("Password").style.border = "red 2px solid";
        return false;
    }
    if (pass == 'password') {
        document.getElementById("LPassword").innerHTML = '** Password shoule not have the value "password" **';
        document.getElementById("Password").style.border = "red 2px solid";
        return false;
    }
    else {
        document.getElementById("LPassword").innerHTML = "";
        document.getElementById("Password").style.border = "none";
    }
}
function mynum() {
    var phone = document.getElementById("phone-Number").value;
    if (isNaN(phone)) {
        document.getElementById("Lphone-Number").innerHTML = "** Invalid phone number **";
        document.getElementById("Lphone-Number").style.color = "red";
        document.getElementById("phone-Number").style.border = "red 4px solid";
        return false;
    }
    if (phone.length != 9) {
        document.getElementById("Lphone-Number").innerHTML = "**number should have 10 number**";
        document.getElementById("Lphone-Number").style.color = "red";
        document.getElementById("Lphone-Number").style.fontsize = "30px";
        document.getElementById("phone-Number").style.border = "red 4px solid";
        return false;
    }

    else {
        document.getElementById("Lphone-Number").innerHTML = "Phone Number";
        document.getElementById("Lphone-Number").style.color = "white";
        document.getElementById("phone-Number").style.border = "none";
    }
}