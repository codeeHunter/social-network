import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducers";
import Preloader from "./Prealoder/Prealoder";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <HashRouter>
                    <div className="app-wrapper">
                        <div className="header">
                            <HeaderContainer/>
                        </div>
                        <div className="mainContent">
                            <div className="navbar">
                                <Navbar/>
                            </div>
                            <div className="mainBlock">
                                <Routes>
                                    <Route path="profile" element={<ProfileContainer/>}>
                                        <Route path=":user_Id" element={<UsersContainer/>}/>
                                    </Route>
                                    <Route path="users" element={<UsersContainer/>}/>
                                    <Route path="dialogs" element={<DialogsContainer/>}/>
                                    <Route path="music" element={<Music/>}/>
                                    <Route path="news" element={<News/>}/>
                                    <Route path="login" element={<Login/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)

