import React, { Component } from 'react';
import './Forms.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      subject: 'Operating System'
    };
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  changeSub = (event) => {
    this.setState({
      subject: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Form Component</h1>
        <form className='fm'>
          <label>UserName</label>
          <input type='text' value={this.state.username} onChange={this.usernameChange}/>
          <br />
          <label>Password</label>
          <input type='password' value={this.state.password} onChange={this.passwordChange}/>
          <br />
          <label>Subject</label>
          <select value={this.state.subject} onChange={this.changeSub}>
            <option>Operating System</option>
            <option>DBMS</option>
            <option>Computer Network</option>
          </select>
          <br />
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default Forms;
