import React from 'react';
import { Login } from './index/login';
import { shoe } from './shoe/shoe';
import { chart} from './chart/chart';
import { About } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainex.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Running Shoe Mileage Tracker<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              
                <li className='nav-item'>
                  <NavLink className='nav-link' to='shoe'>
                    Add Miles
                  </NavLink>
                </li>
            
              
                <li className='nav-item'>
                  <NavLink className='nav-link' to='chart'>
                    Chart
                  </NavLink>
                </li>
            
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                
                onClick={(userName) => {
                  
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/shoe' element={<Shoe userName={userName} />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>Creed Thompson</span>
            <a className='text-reset' href='https://github.com/creedthomp/startup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;