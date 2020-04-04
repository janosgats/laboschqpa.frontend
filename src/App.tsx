import React, { Component } from 'react';
import './App.css';
import { history } from './helpers/history';
import LoginComponent from './loginPage/Login';
import { Router, Switch, Route, Redirect } from 'react-router';
import  { RootState } from './reducers/index'
import { connect } from 'react-redux';

export class App extends Component<AppProps,{}> {  
    render(){
        return (            
            //fentrol lefele sorrendben probalja railleszteni a beirt url-t
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={ LoginComponent } />
                    {//<Route path="/register" component={} />
                    }
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>            
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn
});
  
type AppProps = ReturnType<typeof mapStateToProps>
  
export default connect(
    mapStateToProps
)(App);
