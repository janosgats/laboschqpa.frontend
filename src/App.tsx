import React, { Component } from 'react';
import './App.scss';
import { history } from './helpers/history';
import LoginComponent from './loginPage/Login';
import NewsComponent from './newsPage/News'
import { Router, Switch, Route, Redirect } from 'react-router';
import  { RootState } from './reducers/index'
import { connect } from 'react-redux';
import Snackbar  from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/alert'
import NavbarComponent from './headerComponent/Navbar'

export class App extends Component<AppProps,{}> {  
    render(){
        return (
            <div className="wrapper">
                <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'></link>
                <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/minecrafter-3" type="text/css"/>
                {//fentrol lefele sorrendben probalja railleszteni a beirt url-t
                }   
                <NavbarComponent/>

                <div className="main-wrapper">
                    <Router history={history}>
                        <Switch>
                            <Route path="/login" component={ LoginComponent } />      
                            <Route path="/news" component={ NewsComponent } />
                            <Redirect from="*" to="/news" />
                        </Switch>
                    </Router>   
                    <Snackbar open={this.props.error !== null} autoHideDuration={6000}>
                        <Alert severity="error">
                            A bejelentkezés sikertelen!
                        </Alert>
                    </Snackbar>
                </div>
            </div>         
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn,
    error: state.auth.error
});
  
type AppProps = ReturnType<typeof mapStateToProps>
  
export default connect(
    mapStateToProps
)(App);
