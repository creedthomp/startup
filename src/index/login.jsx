import React from 'react';
import './index.css'
import './login.css'


export function Login({userName}) {

    (async () => {
        const userName = localStorage.getItem('userName');
        if (userName) {
          document.querySelector('#playerName').textContent = userName;
          setDisplay('loginControls', 'none');
          setDisplay('playControls', 'block');
        } else {
          setDisplay('loginControls', 'block');
          setDisplay('playControls', 'none');
        }
      })();
      
      async function loginUser() {
        loginOrCreate(`/api/auth/login`);
      }
      
      async function createUser() {
        loginOrCreate(`/api/auth/create`);
      }
      
      async function loginOrCreate(endpoint) {
        const userName = document.querySelector('#userName')?.value;
        const password = document.querySelector('#userPassword')?.value;
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      
        if (response.ok) {
          localStorage.setItem('userName', userName);
          window.location.href = 'shoe.html';
        } else {
          const body = await response.json();
          const modalEl = document.querySelector('#msgModal');
          modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
          const msgModal = new bootstrap.Modal(modalEl, {});
          msgModal.show();
        }
      }
      
      function play() {
        window.location.href = 'shoe.html';
      }
      
      function logout() {
        localStorage.removeItem('userName');
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
      }
      
      async function getUser(email) {
        let scores = [];
        // See if we have a user with the given email.
        const response = await fetch(`/api/user/${email}`);
        if (response.status === 200) {
          return response.json();
        }
      
        return null;
      }
      
      function setDisplay(controlId, display) {
        const playControlEl = document.querySelector(`#${controlId}`);
        if (playControlEl) {
          playControlEl.style.display = display;
        }
      }

    function fetchAndDisplayQuote() {
        fetch('/api/quotes')
            .then(response => response.json())
            .then(data => {
                // Update the content of the placeholder with the fetched quote
                document.getElementById('quote-placeholder').textContent = data.quote;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                // Update the placeholder text in case of an error
                document.getElementById('quote-placeholder').textContent = 'Error loading quote';
            });
    }

    // Call the function when the page loads
    fetchAndDisplayQuote();


  return (
    <><main class="container-fluid bg-secondary text-center">
          <div>
              <div className="center">
                  <img className="center" src="http://universe.byu.edu/wp-content/uploads/2015/11/Modern-Sailor-Cougar1.jpg" width="100"></img>
              </div>

              <div id="loginControls" style="display: none">
                  <div className="input-group mb-3">
                      <input className="form-control" type="text" id="userName" placeholder="your@email.com" />
                  </div>
                  <div className="input-group mb-3">
                      <input className="form-control" type="text" id="userPassword" placeholder="password" />
                  </div>

                  <button type="button" className="btn btn-primary" onClick="loginUser()">Login</button>
                  <button type="button" className="btn btn-primary" onClick="createUser()">Create</button>
              </div>

              <div id="playControls" style="display: none">
                  <div id="playerName"></div>
                  <button type="button" className="btn btn-primary" onClick="play()">Add Miles</button>
                  <button type="button" className="btn btn-secondary" onClick="logout()">Logout</button>
              </div>
          </div>


      </main><footer>
              <p className="center" style="color: aliceblue" id="quote-placeholder">Loading quote...</p>
          </footer></>
  );
}
