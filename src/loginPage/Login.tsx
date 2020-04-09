import { Component} from "react";
import React from 'react';
import { Button } from "react-bootstrap";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import { login } from '../actions/user.actions'
import { config } from "../constants/config";
import './Login.scss'

export class LoginComponent extends Component<LoginProps,{}>  {

    tryLogIn = (type:string) => {
      this.props.login(type);
    }

    render(){
        return(
          <div className="login-form-wrapper">
            <span>
              Bejelnetkezési lehetőségek: 
            </span>
            <div className="buttton-container">
              {config.providers.map(provider => {
                return(
                  <Button className="provider-button" variant="secondary" onClick={ () => this.tryLogIn(provider)}>
                    {provider}
                  </Button>)
              })}
            </div>
          </div>
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