import React, { Component } from 'react';
import Button from "@material-ui/core/es/Button/Button";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    TopRightSpace: {
        marginRight: 10,
        marginTop: 10
    },
});

class EditAddress extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return (
            <div align="right">
                <Button className={classes.TopRightSpace} variant="fab" color="secondary" disabled={this.props.address === null}>
                    <EditIcon/>
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(EditAddress);