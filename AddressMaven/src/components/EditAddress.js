import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
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
        this.state = {
            dialogOpen: false,
            address: null,
        }
    }

    handleOpenDialog = () => {
        const address = this.props.address;
        this.setState({
            dialogOpen: true,
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
            dialogOpen: false
        })
    };

    updateField = (fieldId, event) => {
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

    createAddress = () => {
        return {
            _id: this.state.address._id,
            _rev: this.state.address._rev,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            website: this.state.website,
            email: this.state.email,
            contact: this.state.contact
        };
    };

    save = () => {
        const address = this.createAddress();
        this.handleCloseDialog();
        this.props.saveAddress(address);
    };

    delete = () => {
        const addressId = this.state.address._id;
        this.handleCloseDialog();
        this.props.deleteAddress(addressId);
    };

    renderField = (id, name, value) => {
        return (
            <TextField id={id} label={name} type="text" value={value}
                       fullWidth style={{marginBottom: 10}} onChange={e => this.updateField(id, e)}
            />
        );
    };

    renderDialog = (fields) => {
      return (
          <Dialog open={this.state.dialogOpen}
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
                  <Button id="SaveButton" color="primary" onClick={this.save}>
                      Save
                      <SaveIcon/>
                  </Button>
                  <Button id="DeleteButton" color="secondary" onClick={this.delete}>
                      Delete
                      <DeleteIcon/>
                  </Button>
                  <Button id="CancelButton" onClick={this.handleCloseDialog}>
                      Cancel
                      <ClearIcon/>
                  </Button>
              </DialogActions>
          </Dialog>
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
                        id="EditButton"
                        variant="fab"
                        color="secondary"
                        disabled={this.props.address === null}
                        onClick={this.handleOpenDialog}>
                    <EditIcon/>
                </Button>
                {this.renderDialog(fields)}
            </div>
        )
    }
}

export default withStyles(styles)(EditAddress);