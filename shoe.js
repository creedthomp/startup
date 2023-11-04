// function shoe() {
//     const nameEl = document.querySelector("#shoe");
//     localStorage.setItem("shoe", nameEl.value);
//     //window.location.href = "play.html";
//   }



  // how do I keep the miles and the shoe together 
function shoemiles() {
    const shoename = document.querySelector("#shoe").value;
    const miles = parseFloat(document.querySelector("#miles").value);
    const username = localStorage.getItem("Username");

    const mymap = JSON.parse(localStorage.getItem('usermap')) || {};

    if (!mymap[username]) {
        mymap[username] = [];
    }

    const userlist = mymap[username];

    // Check if the userlist is not an empty array
    if (userlist.length > 0) {
        for (const data of userlist) {
            if (data.shoe === shoename) {
                // Convert miles to a number and add it to the existing miles
                // console.log(data.miles);
                // console.log(miles);
                data.miles = parseInt(data.miles, 10) + miles;

                localStorage.setItem('usermap', JSON.stringify(mymap));
                window.location.href = "chart.html";
                return; // Exit the loop since we found and updated the data
            }
        }
    }

    // If the shoe is not found in the existing list, add it as a new entry
    mymap[username].push({ shoe: shoename, miles: miles });
    localStorage.setItem('usermap', JSON.stringify(mymap));
    window.location.href = "chart.html";
//   function shoemiles() {
    
    // const shoename = document.querySelector("#shoe");
    // const miles = document.querySelector("#miles"); 
    // const username = localStorage.getItem("Username"); // do I need to maeke this an integer?
    // // localStorage.setItem("shoe", shoename.value);
    // // localStorage.setItem("miles", miles.value);
    // const mymap = JSON.parse(localStorage.getItem('usermap')) || {};
    // if (!mymap[username]) {
    //     mymap[username] = [];
    // }
    // const userlist = mymap[username]
    // if (!mymap[username] === []) {
    //     for (const data of userlist) {
    //         const shoe = data.shoe;
    //         console.log("fail")
    //         if (shoe == shoename) {
    //             data.miles += miles
    //             console.log("true")
    //         }
    // }
    
    // mymap[username].push({ shoe: shoename.value, miles: miles.value});
    // localStorage.setItem('usermap', JSON.stringify(mymap));

    // window.location.href = "chart.html";
    // if (!shoename || isNaN(miles)) {
    //     alert("Please enter a valid shoe name and miles.");
    //     return;
    // const username = localStorage.getItem("Username");
    

    // const shoemilesarray = JSON.parse(localStorage.getItem('shoemiles')) || [];

    // shoeMilesArray.push({ name: username, shoe: shoename, miles: miles });

    // localStorage.setItem('ShoeMiles', JSON.stringify(shoeMilesArray));

    // const arrayAsString = JSON.stringify(shoeMilesArray, null, 2);

    // alert(arrayAsString);
    }


    // function makemap() {
    //     //alert("username");
    //     const shoename = localStorage.getItem("shoe");
    //     const miles = localStorage.getItem("miles");
    //     const username = localStorage.getItem("Username");
    
    //     const mymap = JSON.parse(localStorage.getItem('usermap')) || {}; 

    //     if (!mymap[username]) {
    //         mymap[username] = [];
    //     }

    //     mymap[username].push({ shoe: shoename, miles: miles });
    //     localStorage.setItem('usermap', JSON.stringify(mymap));
    //     //myArray.push({shoe: shoename, miles: miles });
    //     //localStorage.setItem('usermap', JSON.stringify(mymap)); // Save the updated array
    
    //     // Optionally, you can display the saved data
    //     //const arrayAsString = JSON.stringify(myArray, null, 2);
    //     // console.log(arrayAsString);
        
    //     // alert("username");
    // }

    // function makealert() {
    //     const shoename = localStorage.getItem("shoe");
    //     const miles = localStorage.getItem("miles");
    //     const username = localStorage.getItem("Username");
    
    //     const myArray = JSON.parse(localStorage.getItem('ShoeMiles')) || []; 
    
    //     myArray.push({ name: username, shoe: shoename, miles: miles });
    //     localStorage.setItem('ShoeMiles', JSON.stringify(myArray)); // Save the updated array
    
    //     // Optionally, you can display the saved data
    //     const arrayAsString = JSON.stringify(myArray, null, 2);
    //     console.log(arrayAsString);
    
    // const username = localStorage.getItem("Username");

    // const shoemilesarray = JSON.parse(localStorage.getItem('shoemiles')) || [];

    // shoeMilesArray.push({ name: username, shoe: shoename, miles: miles });

    // localStorage.setItem('ShoeMiles', JSON.stringify(shoeMilesArray));

    //const arrayAsString = JSON.stringify(shoeMilesArray, null, 2); // The second argument (null) and third argument (2) are for pretty formatting

// Show the array in an alert
    //alert(arrayAsString);
    // I think I need a map of maps with name, shoes, miles.


    // do I need to put all of this in my function?


    // move on to the chart??




    // Example of how to retrieve user data from localStorage
// function getUserData(username) {
//     const userData = JSON.parse(localStorage.getItem('UserData')) || {};
//     return userData[username] || [];
// }

// do I need to use this??

