import logo from './semantyca-logos_transparent.png';

function App() {
    return (
        <div>
            <header className="App-header">
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                    <a className="navbar-brand" href="#">SEMANTYCA</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.semantyca.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://juka.semantyca.com">Tasks</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main role="main" class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <img src={logo} className="App-logo" alt="logo" style={{width:300}}/>
                    </div>
                    <div class="col-sm-8  align-self-center">
                        <h1>Semantyca of your business</h1>
                        <p class="lead">This is an inception<br/> All you get is this web site</p>
                    </div>
                </div>
            </main>
            <footer className="mt-auto">
            </footer>
        </div>
    );
}

export default App;
