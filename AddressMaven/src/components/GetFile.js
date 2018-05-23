import React from 'react';
import '../css/AddressShow.css';
import files from '../model/FileList';
import RaisedButton from 'material-ui/RaisedButton';

class GetFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            file: files[0]
        };
    }

    getFile = () => {
        let index = this.state.index;
        if (index >= files.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            file: files[index]
        });
    };

    render() {
        return (
            <div className="App">
                <br />
                <br />
                <div className="Card">
                    <br />
                    <h2>File Details</h2>
                    <p>
                        <strong>File:</strong> {this.state.file}
                    </p>
                    <br />
                </div>
                <br />
                <br />
                <RaisedButton
                    id="btnGetFile"
                    primary={true}
                    className="Btn"
                    onClick={this.getFile}
                >
                    Get File
                </RaisedButton>
            </div>
        );
    }
}

export default GetFile;
