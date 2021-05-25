import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Lector from './components/Lector';
import Noticia from './components/Noticia';
import Periodista from './components/Periodista';
import Navigation from './components/Navigation';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path="/" component={Lector} exact/>
                        <Route path="/gestion-noticias" component={Periodista}/>
                        <Route path="/noticia/:id" component={Noticia}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
