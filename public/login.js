function login() {
    const nameEl = document.querySelector("#Username");
    localStorage.setItem("Username", nameEl.value);
    window.location.href = "shoe.html";
  }

//   document.getElementById("loginbutton").addEventListener("click", function() {
//         href = "shoe.html"; // Replace with the URL of your target page
//   });
  
  // how to make my button take me to the shoe.html?

  document.getElementById("loginbutton").addEventListener("click", alert("I don't suck"));