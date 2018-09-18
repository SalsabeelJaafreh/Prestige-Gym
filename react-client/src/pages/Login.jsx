import React from 'react';
import $ from 'jquery';

const box= {
    width: '500px',
    margin: '200px 0'
}

const shape1={
    position: 'relative',
    height: '150px',
    width: '150px',
   backgroundColor: '#0074d9',
    borderRadius: '80px',
    float: 'left',
   marginRight: '-50px'
}
const shape2= {
    position: 'relative',
    height: '150px',
    width: '150px',
     backgroundColor:' #0074d9',
    borderRadius: '80px',
   marginTop: '-30px',
    float: 'left'
}
const shape3= {
    position: 'relative',
    height: '150px',
    width: '150px',
     backgroundColor:'#0074d9',
    borderRadius: '80px',
   marginTop: '-30px',
    float: 'left',
    marginLeft: '-31px'
}
const shape4= {
    position: 'relative',
    height: '150px',
    width: '150px',
     backgroundColor:' #0074d9',
    borderRadius: '80px',
   marginTop: '-25px',
    float: 'left',
    marginLeft: '-32px'
}
const shape5= {
    position: 'relative',
    height: '150px',
    width: '150px',
     backgroundColor: '#0074d9',
    borderRadius: '80px',
    float: 'left',
   marginRight: '-48px',
    marginLeft: '-32px',
   marginTop: '-30px'
}
const shape6= {
    position: 'relative',
    height: '150px',
    width: '150px',
     backgroundColor:'#0074d9',
    borderRadius: '80px',
    float: 'left',
   marginRight: '-20px',
   marginTop: '-35px'
}
const shape7= {
    position: 'relative',
    height: '150px',
    width: '150px',
  backgroundColor: '#0074d9',
    borderRadius: '80px',
    float: 'left',
   marginRight: '-20px',
   marginTop: '-57px'
}
const float= {
    position: 'absolute',
   
}

const form ={
    marginLeft: '145px'
}
class Login extends React.Component {
  constructor() {
    super();
    //all the data save before sent in state
    this.state = {
      userName: '',
      password: '',
      loggedIn: false
    };
  }

  loginHandle() {
    this.setState({
      loggedIn: true
    });
  }

  onWrite3(e) {
    this.setState({
      userName: e.target.value
    });
  }

  onWrite4(e) {
    this.setState({
      password: e.target.value
    });
  }

  login() {
    const that = this;
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        userName: `${this.state.userName}`,
        password: `${this.state.password}`
      },

      success: function(res) {
        if (res[res.length - 1] === 'e') {
          alert(res);
          window.location.href = window.location.origin + '/signup';
        } else if (res[0] === 'W') {
          alert(res);
          that.setState({ loggedIn: true });
          window.location.href = window.location.origin + '/';
        } else {
          alert(res);
          window.location.href = window.location.origin + '/login';
        }
      },
      error: function() {
        alert(`Failed login please try again `);
      }
    });
  }

  home() {
    window.location.href = window.location.origin + '/';
  }

  signup() {
    window.location.href = window.location.origin + '/signup';
  }

  render() {
    return (
    //copy from google 
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
                <div class="box">
                    <div class="shape1"></div>
                    <div class="shape2"></div>
                    <div class="shape3"></div>
                    <div class="shape4"></div>
                    <div class="shape5"></div>
                    <div class="shape6"></div>
                    <div class="shape7"></div>
                    <div class="float">
                        <form class="form" action="">
                            <div class="form-group">
                                <label for="username" class="text-white">Username:</label><br></br>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-white">Password:</label><br></br>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default Login;
