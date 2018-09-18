import React from 'react';

import $ from 'jquery';
//styling part
const main = {
  width: '400px',
  height: '150px',
  display: '-webkit-flex',
  display: 'flex',
  marginBottom: '-50px',
  marginLeft: '7%'
};

const header = {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Lobster'
};

const number = {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px',
  marginRight: '20px'
};

const number2 = {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px'
};

const input = {
  padding: '10px 10px 10px 10px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color: 'black',
  fontSize: '15px',
  border: '2px solid black',
  borderRadius: '15px'
};
//the style for the button Sign Up
const button = {
  padding: '5px',
  // display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop: '20px',
  fontSize: '20px',
  borderRadius: '50px',
  fontFamily: 'Lobster'
};

class NewTrainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      phone: '',
      loggedIn: true
    };
  }

  home() {
    window.location.href = window.location.origin + '/';
  }

  onWrite1(e) {
    this.setState({
      number: 1 * e.target.value
    });
  }

  onWrite2(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onWrite3(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onWrite4(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onWrite5(e) {
    this.setState({
      age: e.target.value
    });
  }

  onWrite6(e) {
    this.setState({
      phone: e.target.value
    });
  }

 
  sentData() {
    $.ajax({
      type: 'POST',
      url: '/trainer',
      data: {
        number: `${this.state.number}`,
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        gender: `${this.state.gender}`,
        age: `${this.state.age}`,
        phone: `${this.state.phone}`

      },
      //when success do this
      success: function(res) {
        alert(res);
      },
      error: function(res) {
        alert('Failed sent this data please try agian');
      }
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={header}>
          Welcome To Prestige Gym<br />
        </h2>
        <div1 style={main}>
          <h3 className="column" style={number}>
            Number:
            <input
              type="number"
              value={this.state.number}
              onChange={this.onWrite1.bind(this)}
              placeholder="Number"
              style={input}
            />
          </h3>
          <h3 style={number}>
            First name:
            <input
              value={this.state.firstName}
              onChange={this.onWrite2.bind(this)}
              placeholder="First name"
              style={input}
            />
          </h3>
         

          <h3 style={number}>
            Last name:
            <input
              value={this.state.lastName}
              onChange={this.onWrite3.bind(this)}
              placeholder="Last name"
              style={input}
            />
          </h3>
          </div1>


          <div2 style={main}>
          <h3 style={number2}>
            Gender:
            <input
              value={this.state.gender}
              onChange={this.onWrite4.bind(this)}
              placeholder="Gender"
              style={input}
            />
          </h3>
      
          <h3 style={number}>
            Age:
            <input
              type="number"
              value={this.state.age}
              onChange={this.onWrite5.bind(this)}
              placeholder="Age"
              style={input}
            />
          </h3>
          <h3 style={number}>
            Phone:
            <input
              type="number"
              value={this.state.phone}
              onChange={this.onWrite6.bind(this)}
              placeholder="Phone"
              style={input}
            />
          </h3>
         
         
        </div2>
    
        <button onClick={this.sentData.bind(this)} style={button}>
          Submit
        </button>
        <button onClick={this.home.bind(this)} style={button}>
          Back to Home
        </button>
      </div>
    );
  }
}


export default NewTrainer;
