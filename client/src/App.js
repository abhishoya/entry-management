import React, {Component} from 'react';
import NavBar from './Components/NavBar';
import Routes from './Routes';
// import react-dom from 'react-dom';
// import react-router-dom from 'react-router-dom';

class App extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div style={{'background':'#313536','color':'#fff','min-height':'100vh'}}>
                <Routes />
            </div>
        );
    }
}

export default App;