import React, { Component } from 'react';
import logo from './logo.svg';
import './login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import history from '../../history';

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({email: this.email, password: this.password});
    e.preventDefault();
    history.push({
      pathname: '/dashboard',
      search: '',
      state: this.state
    });
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-form-wp">
          <Form className="Login-form" onSubmit={this.handleSubmit}>
            <div className="Login-logo"><img src={logo} alt="logo" /></div>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" ref={(input) => this.email = input} placeholder="Email"/>
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input type="password" ref={(input) => this.password = input} placeholder="****"/>
            </FormGroup>
            <Button type="submit" color="secondary">Login</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
