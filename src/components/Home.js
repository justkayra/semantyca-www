import React from 'react';
import Container from "react-bootstrap/Container";
import axios from 'axios';

import logo from './../semantyca-logos_transparent.png';
import {Nav} from "react-bootstrap";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            name: 'Semantyca',
            motto: '',
            subMotto: '',
            menuHome: 'Home',
            menuHasks: 'Tasks'
        };

    }

    componentDidMount() {
        const connectSession = axios.create({
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        });
        let URL = process.env.REACT_APP_REST_HOST + '/home/' + this.state.lang;
        connectSession.get(URL)
            .then(response => {
                let data = response.data;
                this.setState({
                    lang: data.lang,
                    name: data.name,
                    motto: data.motto,
                    subMotto: data.subMotto,
                    menuHome: data.menuHome,
                    menuTasks: data.menuTasks
                });
            }).catch(error => {
                console.log('update lang', error);
        });
    }

    updateLang = (lang) => {
        const connectSession = axios.create({
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        });
        let URL = process.env.REACT_APP_REST_HOST + '/home/' + lang;
        connectSession.get(URL)
            .then(response => {
                let data = response.data;
                this.setState({
                    lang: data.lang,
                    name: data.name,
                    motto: data.motto,
                    subMotto: data.subMotto,
                    menuHome: data.menuHome,
                    menuTasks: data.menuTasks
                });
            }).catch(error => {
            console.log('update lang', error);
        });

    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return (
            <Container fluid style={{padding: 0}}>
                <div>
                    <header className="App-header">
                        <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                            <a className="navbar-brand" href="https://www.semantyca.com">Semantyca</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon">{this.state.name}</span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active"
                                           href="https://www.semantyca.com">{this.state.menuHome}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active"
                                           href="https://juka.semantyca.com">{this.state.menuTasks}</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <main role="main" className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={logo} className="App-logo" alt="logo" style={{width: 300}}/>
                            </div>
                            <div className="col-sm-8  align-self-center">
                                <h1>{this.state.motto}</h1>
                                <p className="lead">{this.state.subMotto}</p>
                            </div>
                        </div>
                    </main>
                    <footer className="mt-auto">
                        <div index={1}>
                            <Container fluid>
                                <Nav activeKey="/home">
                                    <Nav.Item>
                                        {<Nav.Link onClick={() => this.updateLang('en')}>en</Nav.Link>}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {<Nav.Link onClick={() => this.updateLang('ru')}>ru</Nav.Link>}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {<Nav.Link onClick={() => this.updateLang('pt')}>pt</Nav.Link>}
                                    </Nav.Item>
                                </Nav>
                            </Container>
                        </div>
                    </footer>
                </div>
            </Container>)

    }

}

export default Home;
