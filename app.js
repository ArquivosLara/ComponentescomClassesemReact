import './App.css';
import { Component } from 'react';
import Exemplo from './Components/Exemplo';
import Header from './Components/Header';
import Footer from './Components/Footer';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Header nome="Hellen" />
                <Exemplo />
                <Footer/>
            </div>
        );
    }
}

export default App;