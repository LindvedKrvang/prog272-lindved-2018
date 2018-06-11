import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import SaveIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { AddressFieldNames } from '../be/AddressFieldNames';

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
        this.tmp = "Hello World";
        this.state = {
            open: false,
            tmp: "Hello World",
            address: null,
        }
    }

    handleOpenDialog = () => {
        const address = this.props.address;
        this.setState({
            open: true,
            address: address,
            firstName: address.firstName,
            lastName: address.lastName,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            website: address.website,
            email: address.email,
            contact: address.contact
        })
    };

    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    };

    updateField = (fieldId, event) => {
        console.log(event.target.value);
        switch (fieldId){
            case AddressFieldNames.FirstNameId:{
                this.setState({ firstName: event.target.value });
                break;
            }
            case AddressFieldNames.LastNameId:{
                this.setState({ lastName: event.target.value });
                break;
            }
            case AddressFieldNames.StreetId:{
                this.setState({ street: event.target.value });
                break;
            }
            case AddressFieldNames.CityId:{
                this.setState({ city: event.target.value });
                break;
            }
            case AddressFieldNames.StateId:{
                this.setState({ state: event.target.value });
                break;
            }
            case AddressFieldNames.ZipId:{
                this.setState({ zip: event.target.value });
                break;
            }
            case AddressFieldNames.PhoneId:{
                this.setState({ phone: event.target.value });
                break;
            }
            case AddressFieldNames.WebsiteId:{
                this.setState({ website: event.target.value });
                break;
            }
            case AddressFieldNames.EmailId:{
                this.setState({ email: event.target.value });
                break;
            }
            case AddressFieldNames.ContactId:{
                this.setState({ contact: event.target.value });
                break;
            }
            default: {
                break;
            }
        }
    };

    renderField = (id, name, value) => {
        return (
            <TextField id={id} label={name} type="text" value={value}
                       fullWidth style={{marginBottom: 10}} onChange={e => this.updateField(id, e)}
            />
        );
    };

    render(){
        const {classes} = this.props;

        const fields = this.state.address !== null ? (
            <div>
                {this.renderField(AddressFieldNames.FirstNameId, AddressFieldNames.FirstName, this.state.firstName)}
                {this.renderField(AddressFieldNames.LastNameId, AddressFieldNames.LastName, this.state.lastName)}
                {this.renderField(AddressFieldNames.StreetId, AddressFieldNames.Street, this.state.street)}
                {this.renderField(AddressFieldNames.CityId, AddressFieldNames.City, this.state.city)}
                {this.renderField(AddressFieldNames.StateId, AddressFieldNames.State, this.state.state)}
                {this.renderField(AddressFieldNames.ZipId, AddressFieldNames.Zip, this.state.zip)}
                {this.renderField(AddressFieldNames.PhoneId, AddressFieldNames.Phone, this.state.phone)}
                {this.renderField(AddressFieldNames.WebsiteId, AddressFieldNames.Website, this.state.website)}
                {this.renderField(AddressFieldNames.EmailId, AddressFieldNames.Email, this.state.email)}
                {this.renderField(AddressFieldNames.ContactId, AddressFieldNames.Contact, this.state.contact)}
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
                    <DialogActions>
                        <Button color="primary">
                            Save
                            <SaveIcon/>
                        </Button>
                        <Button color="secondary">
                            Delete
                            <DeleteIcon/>
                        </Button>
                        <Button onClick={this.handleCloseDialog}>
                            Cancel
                            <ClearIcon/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditAddress);