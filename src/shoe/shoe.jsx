import React from 'react';
import './shoe.css';

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


class ShoeTracker {
    socket;

    constructor() {
        this.configureWebSocket();
        this.checkMileageAndBroadcast();
    }

    // Functionality for WebSocket communication
    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        //this.socket = new WebSocket(`https://startup.creedthompson.click/shoe.html`);


        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        this.socket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            console.log(`Message received: ${msg.text}`);
        };

        this.socket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            const broadcastDiv = document.getElementById('broadcastMessages');
            broadcastDiv.innerHTML += `<p>${msg.text}</p>`;  // Append new messages
        };
    }

    // Check shoe mileage and broadcast if it hits 250 miles
    checkMileageAndBroadcast() {
        const shoeName = document.querySelector("#shoe").value;
        const miles = parseFloat(document.querySelector("#miles").value);
        const userName = localStorage.getItem("userName") ?? 'Anonymous';

        if (miles >= 250) {
            const message = `${userName}'s shoe: ${shoeName} has reached 250 miles!`;
            this.broadcastMessage(message);
        }
    }

    // Broadcast a message to all connected WebSocket clients
    broadcastMessage(message) {
        const event = {
            from: 'ShoeTracker',
            text: message,
        };
        this.socket.send(JSON.stringify(event));
    }}


// Instantiate the ShoeTracker
const shoeTracker = new ShoeTracker();
  // Use "React Refs" to allow the parent to reach into the button component
  // and simulate a button press. This is necessary to play the sequence that
  // the player must copy.
 

  return (
    <><main>
          <h2 style="color: gray" class="better-header">Insert the name of the shoe and the number of miles</h2>
          <input type="text" id="shoe" placeholder="SHOE" />
          <input type="text" id="miles" placeholder="MILES" />
          <button type="submit" onclick="shoemiles()">enter</button>
    

      </main><div id="broadcastMessages" style="margin-top: 20px;">
              <p style="color: rgb(123, 121, 123) ">  user connected </p>
          </div><script src="shoe.js"></script></>
  
  );
}
