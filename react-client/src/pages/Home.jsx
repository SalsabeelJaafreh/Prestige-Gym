import React from 'react';
import $ from 'jquery';


const header1 = {
  color: '#1a2d63',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '50px',
  fontFamily: 'Lobster',
  marginTop: '2px'
};

const header3 = {
  color: '#1a2d63',
  fontWeight: 'bold',
  textAlign: 'centezr',
  fontSize: '25px',
  fontFamily: 'Lobster',
  marginTop: '5px',
  marginLeft: '200px'
};

const input3 = {
  padding: '10px 10px 10px 10px',
  marginRight: '-80px',
  marginLeft: '-30px',
  color: 'black',
  fontSize: '15px',
  border: '2px solid black',
  borderRadius: '15px'
};

const button3 = {
  padding: '6px',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid ',
  fontSize: '20px',
  borderRadius: '15px',
  fontFamily: 'Lobster'
};

const table = {
  border: '5px solid #1a2d63',
  borderCollapse: 'collapse',
  padding: '3px',
  textAlign: 'center',
  fontSize: '25px',
  fontWeight: 'bold',
  color: 'black',
  backgroundColor: 'white'
};

const table2 = {
  border: '3px solid black',
  borderCollapse: 'collapse',
  padding: '3px',
  textAlign: 'center',
  fontSize: '25px',
  //fontWeight:'bold',
  color: 'white',
  backgroundColor: 'gray'
};

const button1 = {
  padding: '5px',
  display: 'block',
  // marginRight: 'auto',
  // marginLeft: 'auto',
  backgroundColor: '#bb280e',
  color: '#1a2d63',
  border: '2px solid #bb280e',
  marginTop: '5px',
  fontSize: '20px',
  borderRadius: '50px',
  fontFamily: 'Lobster'
};

const button2 = {
  padding: '5px',

  display: 'block',
  // marginRight: 'auto',
  // marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop: '0px',
  fontSize: '20px',
  borderRadius: '50px',
  fontFamily: 'Lobster'
};  

class Home extends React.Component {
  constructor() {
    super();
    //all the data save before sent in state
    this.state = {
      loggedIn: true,
      trainerNumber: 0,
      //the data get from retrieve
      data: {}
    };
  }

  onWrite1(e) {
    this.setState({
      trainerNumber: 1 * e.target.value
    });
  }

  logout() {
    const that = this;
    $.ajax({
      type: 'GET',
      url: '/logout',
      success: function(res) {
        alert(res);
        that.setState({ loggedIn: false });
        window.location.href = window.location.origin + '/login';
      },

     
      error: function() {
        alert('You are not login  ');
      }
    });
  }

  newTrainer() {
    window.location.href = window.location.origin + '/newtrainer';
  }

  //for retrieve one trainer
  retrieveOne() {
    const that = this;
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/trainer',
      data: { number: `${that.state.trainerNumber}` },
      success: function(res) {
        alert('Sucess retrieve trainer click ok to show it  ');
        that.setState({ data: res });
        that.renderData();
      },
      error: function() {
        alert('Failed in retrieve');
      }
    });
  }

  renderData() {
    var data = this.state.data[0];
    $('.number').html(data.trainerNumber);
    $('.firstName').html(data.firstName);
    $('.lastName').html(data.lastName);
    $('.gender').html(data.gender);
    $('.age').html(data.age);
    $('.phone').html(data.phone);
  }

  render() {
    return (
      <div1>
        <h2 style={header1}>Welcome to Prestige Gym webpage for   
coach </h2>
        <div2
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h3 className="col-xs-4 col-xs-offset-1" style={header3}>
            Get all info for this coach:
          </h3>
          <input
            className="col-xs-1 col-xs-offset-1"
            value={this.state.trainerNumber}
            type="number"
            onChange={this.onWrite1.bind(this)}
            placeholder="Trainer number"
            style={input3}
          />
          <button
            className="col-xs-2 col-xs-offset-1"
            onClick={this.retrieveOne.bind(this)}
            style={button3}
          >
            show 
          </button>
        </div2>
        <div3>
          <table
            style={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px'
            }}
          >
            <tr>
              <th style={table}>Number</th>
              <th style={table}>First name</th>
              </tr>
              <tr>
              <th style={table}>Last name</th>
              <th style={table}>Gender</th>
            </tr>
            <tr>
              <td className="number"  style={table2} />
              <td className="firstName" style={table2} />
              <td className="lastName" style={table2} />
              <td className="gender" style={table2} />
            </tr>
            <tr>
              <th style={table}>Age</th>
              <th style={table}>Phone</th>
              
            </tr>
            <tr>
              <td className="age" style={table2} />
              <td className="phone" style={table2} />
         
            </tr>
  
          </table>
        </div3>
        <div4 className="row">
          <button onClick={this.newTrainer.bind(this)} style={button2}>
            Create New coach
          </button>
          <button onClick={this.logout.bind(this)} style={button1}>
            Logout
          </button>
        </div4>
      </div1>
    );
  }
}


export default Home;
