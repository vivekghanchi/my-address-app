import React from 'react';
import TextField from '../core/TextField';

const AddressAddEdit = ({ saveNewAddress, item, isAddNew }) => {
    const [addNewAddress, setAddNewAddressItem] = React.useState(isAddNew ? {
        country: "India",
        fullname: "",
        mobile: "",
        pincode: "",
        houseno: '',
        area: "",
        landmark: "",
        city: '',
        state: "",
        default: false,
    } : item);

    const onChangeInput = (e) => {
        let address = { ...addNewAddress };
        address[e.target.name] = e.target.value;
        setAddNewAddressItem(address);
    }

    const saveAddress = () => {
        saveNewAddress(addNewAddress, isAddNew);
    }

    return <>
        <div className={"a-row"}>
            <h3> {isAddNew ? "Add a new address" : "Edit your address"} </h3><br />
            <TextField label={'Country'} value={'India'} name={"country"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Full name'} value={addNewAddress.fullname} name={"fullname"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Mobile Number'} value={addNewAddress.mobile} name={"mobile"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Pincode'} value={addNewAddress.pincode} name={"pincode"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Flat, House no., Building, Company, Apartment'} value={addNewAddress.houseno} name={"houseno"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Area, Street, Sector, Village'} value={addNewAddress.area} name={"area"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Landmark'} value={addNewAddress.landmark} name={"landmark"} onChangeInput={onChangeInput} /><br />
            <TextField label={'Town/City'} value={addNewAddress.city} name={"city"} onChangeInput={onChangeInput} /> <br />
            <TextField label={'State'} value={addNewAddress.state} name={"state"} onChangeInput={onChangeInput} />
            <br />
            <button onClick={saveAddress}>{isAddNew ? "Add Address" : "Save Changes"} </button>
        </div>
    </>
}

export default AddressAddEdit;