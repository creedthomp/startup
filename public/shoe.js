function shoemiles() {
    const shoename = document.querySelector("#shoe").value;
    const miles = parseFloat(document.querySelector("#miles").value);
    const username = localStorage.getItem("userName"); // Assuming username is stored in local storage

    // Prepare data to send to server
    const shoeData = { username, shoe: shoename, miles };

    // Send POST request to server
    fetch('/api/shoe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoeData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle successful data submission here
        // Perhaps redirect to a page or update the UI
        window.location.href = "chart.html";
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
    });
}

class Game {
    buttons;
    allowPlayer;
    sequence;
    playerPlaybackPos;
    mistakeSound;
    socket;
  
    constructor() {
      this.buttons = new Map();
      this.allowPlayer = false;
      this.sequence = [];
      this.playerPlaybackPos = 0;
      this.mistakeSound = loadSound('error.mp3');
  
      document.querySelectorAll('.game-button').forEach((el, i) => {
        if (i < btnDescriptions.length) {
          this.buttons.set(el.id, new Button(btnDescriptions[i], el));
        }
      });
  
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = this.getPlayerName();
  
      this.configureWebSocket();
    }
  
    async pressButton(button) {
      if (this.allowPlayer) {
        this.allowPlayer = false;
        await this.buttons.get(button.id).press(1.0);
  
        if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
          this.playerPlaybackPos++;
          if (this.playerPlaybackPos === this.sequence.length) {
            this.playerPlaybackPos = 0;
            this.addButton();
            this.updateScore(this.sequence.length - 1);
            await this.playSequence();
          }
          this.allowPlayer = true;
        } else {
          this.saveScore(this.sequence.length - 1);
          this.mistakeSound.play();
          await this.buttonDance(2);
        }
      }
    }
  
    async reset() {
      this.allowPlayer = false;
      this.playerPlaybackPos = 0;
      this.sequence = [];
      this.updateScore('--');
      await this.buttonDance(1);
      this.addButton();
      await this.playSequence();
      this.allowPlayer = true;
  
      // Let other players know a new game has started
      this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
    }
  
    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
  
    async playSequence() {
      await delay(500);
      for (const btn of this.sequence) {
        await btn.press(1.0);
        await delay(100);
      }
    }
  
    addButton() {
      const btn = this.getRandomButton();
      this.sequence.push(btn);
    }
  
    updateScore(score) {
      const scoreEl = document.querySelector('#score');
      scoreEl.textContent = score;
    }
  
    async buttonDance(laps = 1) {
      for (let step = 0; step < laps; step++) {
        for (const btn of this.buttons.values()) {
          await btn.press(0.0);
        }
      }
    }
  
    getRandomButton() {
      let buttons = Array.from(this.buttons.values());
      return buttons[Math.floor(Math.random() * this.buttons.size)];
    }
  
    async saveScore(score) {
      const userName = this.getPlayerName();
      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, score: score, date: date };
  
      try {
        const response = await fetch('/api/score', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newScore),
        });
  
        // Let other players know the game has concluded
        this.broadcastEvent(userName, GameEndEvent, newScore);
  
        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } catch {
        // If there was an error then just track scores locally
        this.updateScoresLocal(newScore);
      }
    }
  
    updateScoresLocal(newScore) {
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
  
      let found = false;
      for (const [i, prevScore] of scores.entries()) {
        if (newScore > prevScore.score) {
          scores.splice(i, 0, newScore);
          found = true;
          break;
        }
      }
  
      if (!found) {
        scores.push(newScore);
      }
  
      if (scores.length > 10) {
        scores.length = 10;
      }
  
      localStorage.setItem('scores', JSON.stringify(scores));
    }
  
    // Functionality for peer communication using WebSocket
  
    configureWebSocket() {
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
      this.socket.onopen = (event) => {
        this.displayMsg('system', 'game', 'connected');
      };
      this.socket.onclose = (event) => {
        this.displayMsg('system', 'game', 'disconnected');
      };
      this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
          this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
        } else if (msg.type === GameStartEvent) {
          this.displayMsg('player', msg.from, `started a new game`);
        }
      };
    }
  
    displayMsg(cls, from, msg) {
      const chatText = document.querySelector('#player-messages');
      chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    }
  
    broadcastEvent(from, type, value) {
      const event = {
        from: from,
        type: type,
        value: value,
      };
      this.socket.send(JSON.stringify(event));
    }
  }
  
  const game = new Game();



// function shoemiles() {
//     //window.location.href = "chart.html";
//     const shoename = document.querySelector("#shoe").value;
//     const miles = parseFloat(document.querySelector("#miles").value);
//     const username = localStorage.getItem("Username"); // Assuming username is still in localStorage

//     const shoeData = { username, shoe: shoename, miles };
// }
//     fetch('/api/shoe', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(shoeData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//         window.location.href = "chart.html";
//     })
//     .catch((error) => {
//         console.error('Errror:', error);
//     });
// }





// function shoemiles() {
//     const shoename = document.querySelector("#shoe").value;
//     const miles = parseFloat(document.querySelector("#miles").value);
//     const username = localStorage.getItem("Username");

//     // Prepare the data to be sent to the server
//     const shoeData = { username, shoe: shoename, miles };

//     // Send a POST request to the server
//     fetch('/api/shoe', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(shoeData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//         // Redirect to chart.html after successful data submission
//         window.location.href = "chart.html";
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }
// function direct(){
    
//     window.location.href = "chart.html";
//     alert('please')
// }

// function shoemiles() {
//     //window.location.href = "chart.html";
//     const shoename = document.querySelector("#shoe").value;
//     const miles = parseFloat(document.querySelector("#miles").value);
//     const username = localStorage.getItem("Username"); // Assuming username is still in localStorage

//     const shoeData = { username, shoe: shoename, miles };

//     fetch('/api/shoe', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(shoeData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//         window.location.href = "chart.html";
//     })
//     .catch((error) => {
//         console.error('Errror:', error);
//     });
// }





// // use console logs to figure out
// //this code ^^ that chat gave me doesnt enter the data to the chart or send me to the next page 




// // function shoemiles() {
// //     const shoename = document.querySelector("#shoe").value;
// //     const miles = parseFloat(document.querySelector("#miles").value);
// //     const username = localStorage.getItem("Username");

// //     const mymap = JSON.parse(localStorage.getItem('usermap')) || {};

// //     if (!mymap[username]) {
// //         mymap[username] = [];
// //     }

// //     const userlist = mymap[username];

// //     // Check if the userlist is not an empty array
// //     if (userlist.length > 0) {
// //         for (const data of userlist) {
// //             if (data.shoe === shoename) {
// //                 // Convert miles to a number and add it to the existing miles
// //                 // console.log(data.miles);
// //                 // console.log(miles);
// //                 data.miles = parseInt(data.miles, 10) + miles;

// //                 localStorage.setItem('usermap', JSON.stringify(mymap));
// //                 window.location.href = "chart.html";
// //                 return; // Exit the loop since we found and updated the data
// //             }
// //         }
// //     }

// //     // If the shoe is not found in the existing list, add it as a new entry
// //     mymap[username].push({ shoe: shoename, miles: miles });
// //     localStorage.setItem('usermap', JSON.stringify(mymap));
// //     window.location.href = "chart.html";














// //   function shoemiles() {
    
//     // const shoename = document.querySelector("#shoe");
//     // const miles = document.querySelector("#miles"); 
//     // const username = localStorage.getItem("Username"); // do I need to maeke this an integer?
//     // // localStorage.setItem("shoe", shoename.value);
//     // // localStorage.setItem("miles", miles.value);
//     // const mymap = JSON.parse(localStorage.getItem('usermap')) || {};
//     // if (!mymap[username]) {
//     //     mymap[username] = [];
//     // }
//     // const userlist = mymap[username]
//     // if (!mymap[username] === []) {
//     //     for (const data of userlist) {
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

