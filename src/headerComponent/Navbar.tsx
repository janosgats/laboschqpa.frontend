import './Navbar.scss'
import React from 'react'
import { Component } from 'react';
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import { Navbar } from 'react-bootstrap';

class NavbarComponent extends Component<NavbarProps,{}> {

    render() {
        return(
            <Navbar>
                <span>
                    MCST
                </span>
            </Navbar>
        )
    }

}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ }, dispatch);

  type NavbarProps = ReturnType<typeof mapDispatchToProps>
  
export default connect(
    null,
    mapDispatchToProps
)(NavbarComponent);