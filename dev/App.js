import React from 'react';
import Componente from '../src/index';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Boilerplate</h1>
                <Componente></Componente>
            </div>
        );
    }
}

export default App;