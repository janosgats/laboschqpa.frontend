import { Component} from "react";
import React from 'react';
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import './News.scss'

export class NewsComponent extends Component<LoginProps,{}>  {

    render(){
        return(
          <div>
            
          </div>
        )
      }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({  }, dispatch);

  type LoginProps = ReturnType<typeof mapDispatchToProps>
  
export default connect(
    null,
    mapDispatchToProps
)(NewsComponent);