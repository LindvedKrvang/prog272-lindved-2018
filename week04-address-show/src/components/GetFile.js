import React from 'react';
import '../css/AddressShow.css';
import files from '../model/FileList';

class GetFile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            file: files[0]
        };
        console.log(this.state.file)
    }

    getFile = () => {
        let index = this.state.index;
        if(index >= files.length - 1)
            index = 0;
        else
            index++;

        this.setState({
            index: index,
            file: files[index]
        })
    };

    render() {
        return (
            <div className="App">
                <br/>
                <br/>
                <div className="Card">
                    <br/>
                    <h2>File Details</h2>
                    <p><strong>File:</strong> {this.state.file}</p>
                    <br/>
                </div>
                <br/>
                <br/>
                <button className="Btn" onClick={this.getFile}>Get File</button>
            </div>
        );
    }
}

export default GetFile;