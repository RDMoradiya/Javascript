function loginpage() {
  // username :-

  let user = document.getElementById("unm").value;
  if (user == "") {
    document.getElementById("uname").innerHTML = "**Enter Username";
    document.getElementById("unm").style.border = "2px solid red";
    // document.getElementById("unm").innerHTML =
    ("<style>#unm{border:2px solid red;</<style>");

    return false;
  } else if (!isNaN(user)) {
    document.getElementById("uname").innerHTML = "*Enter Alphabates*";
    return false;
  } else {
    document.getElementById("uname").innerHTML = "";
    document.getElementById("unm").style.border = "1px solid grey";
  }

  if (user.length < 3 || user.length > 10) {
    document.getElementById("uname").innerHTML =
      "**Username Must be 3 to 9 Alphabates ";
  }

  //  Password :-

  let pwd = document.getElementById("ps").value;
  if (pwd == "") {
    document.getElementById("pass").innerHTML = "**Enter Password";
    document.getElementById("ps").style.border = "2px solid red";

    return false;
  } else {
    document.getElementById("pass").innerHTML = "";
    document.getElementById("ps").style.border = "1px solid grey";
  }
}
