import { Component } from 'react';

const estilo = {
    color: 'blue',
    border: 'black solid 2px',
    backgroundColor: '#E6E9F8',    
};

export class Footer extends Component {
    render() {
        return (
            <div>
                <h1 style={estilo}>Obrigada, por visitar!</h1>
            </div>
        );
    }
}

export default Footer; 
