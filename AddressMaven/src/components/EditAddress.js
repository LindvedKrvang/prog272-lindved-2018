import React, { Component } from 'react';
import Button from "@material-ui/core/es/Button/Button";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import TextField from "@material-ui/core/es/TextField/TextField";

const styles = () => ({
    TopRightSpace: {
        marginRight: 10,
        marginTop: 10
    },
});

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class EditAddress extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleOpenDialog = () => {
        this.setState({
            open: true
        })
    };

    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    };

    renderField = (id, name, value) => {
        return (
            <TextField id={id} label={name} type="string" value={value} fullWidth style={{marginBottom: 10}}/>
        );
    };

    render(){
        const {classes} = this.props;

        const fields = this.props.address !== null ? (
            <div>
                {this.renderField('firstName', 'First Name:', this.props.address.firstName)}
                {this.renderField('lastName', 'Last Name:', this.props.address.lastName)}
                {this.renderField('street', 'Street:', this.props.address.street)}
                {this.renderField('city', 'City:', this.props.address.city)}
                {this.renderField('state', 'State:', this.props.address.state)}
                {this.renderField('zip', 'Zip:', this.props.address.zip)}
                {this.renderField('phone', 'Phone:', this.props.address.phone)}
                {this.renderField('website', 'Website:', this.props.address.website)}
                {this.renderField('email', 'Email:', this.props.address.email)}
                {this.renderField('contact', 'Contact:', this.props.address.contact)}
            </div>
        ) : (<div/>);
        return (
            <div align="right">
                <Button className={classes.TopRightSpace}
                        variant="fab"
                        color="secondary"
                        disabled={this.props.address === null}
                        onClick={this.handleOpenDialog}>
                    <EditIcon/>
                </Button>
                <Dialog open={this.state.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleCloseDialog}>
                    <DialogTitle>
                        {"Modify Address"}
                    </DialogTitle>
                    <DialogContent>
                        {fields}
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditAddress);