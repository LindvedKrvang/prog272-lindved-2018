import React from 'react';
import '../css/AddressShow.css';
import files from '../model/FileList';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    TopRightSpace: {
        margin: theme.spacing.unit,
        width: 200
    }
});

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
        const { classes } = this.props;
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
                <Button
                    variant="raised"
                    id="btnGetFile"
                    color="primary"
                    className={classes.TopRightSpace}
                    onClick={this.getFile}
                >
                    Get File
                </Button>
            </div>
        );
    }
}

GetFile.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(GetFile);
