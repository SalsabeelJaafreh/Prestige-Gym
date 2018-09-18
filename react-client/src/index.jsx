import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
  IndexRoute,
  hashHistory
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NewTrainer from './pages/NewTrainer.jsx';

//style part
const div2 = {
  backgroundColor: '#c13aa7',
  align: 'center',
  height: '52px',
  border: 'solid #d22d10 4px'
};

const div3 = {
  color: '#c13aa7',
  fontSize: '25px',
  fontFamily: 'Lobster',
  float: 'right',
  width: '180px'
};

const header1 = {
  color: 'pink',
  fontSize: '25px',
  marginLeft: '10px',
  marginTop: '2px',
  fontFamily: 'Lobster'
};

const header2 = {
  color: '#1a2d63',
  fontWeight: 'bold',
  fontSize: '30px',
  // marginLeft: '10px',
  marginTop: '20px',
  // cursor: 'default'
};

const notActive1 = {
  color: 'white',
  marginLeft: '10%',
  fontSize: '20px',
  textDecoration: 'none'
};

const notActive2 = {
  color: 'white',
  marginLeft: '10%',
  marginRight: '10%',
  fontSize: '20px',
  textDecoration: 'none'
};
const notActive3 = {
  color: 'white',
  marginRight: '10%',
  fontSize: '20px',
  textDecoration: 'none'
};

const Active = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: '#d22d10'
};

class App2 extends React.Component {
  render() {
    return (
      <Router /*history={hashHistory}*/>
        <div>
          <div style={div2}>
            <div style={header1}>
              <NavLink
                to="/login"
                exact
                strict
                style={{ textDecoration: 'none', header2 }}
              >


                <h style={header2}>PRESTIGE GYM </h>
              </NavLink>
              <div style={div3} align="right">
                <NavLink
                  to="/login"
                  exact
                  strict
                
                  activeStyle={Active}
                >
                  Login
                </NavLink>
               
              </div>
            </div>
          </div>
          <Route path="/" exact strict component={Home} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/newtrainer" exact strict component={NewTrainer} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App2 />, document.getElementById('app1'));
