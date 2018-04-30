import React, {Component} from 'react';
import '../css/AddressShow.css';
import addresses from '../model/AddressList';
import AddressShow from "./AddressShow";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: addresses[0]
        };
    }

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address}/>
                <button id='btnSetAddress' className='Btn' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

    setAddress = () => {
        this.setState({
            address: addresses[1]
        })
    };
}

export default App;
