import { Component} from "react";
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import { login } from '../actions/user.actions'

//internal state
interface ILoginState {
  username:string,
  password:string
}

export class LoginComponent extends Component<LoginProps, ILoginState>  {
    
    constructor(props:LoginProps) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    tryLogIn = () => {
      this.props.login(this.state.username,this.state.password);
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      switch (event.currentTarget.name) {
        case "email": {
          this.setState({ username: event.currentTarget.value });
          break;
        }
        case "password": {
          this.setState({ password: event.currentTarget.value });
          break;
        }
      }
    };

    render(){
        return (
            <Form onSubmit={this.tryLogIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                name="email"
                type="email" 
                placeholder="Enter email" 
                value={this.state.username}
                onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ login }, dispatch);

  type LoginProps = ReturnType<typeof mapDispatchToProps>
  
export default connect(
    null,
    mapDispatchToProps
)(LoginComponent);