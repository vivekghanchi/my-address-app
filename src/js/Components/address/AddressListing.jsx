import * as React from 'react';
import AddressAddEdit from './AddressAddEdit';
import AddressItem from './AddressItem';

const AddressListing = () => {
    //State
    const [isAddNew, setIsAddNew] = React.useState(true);
    const [showAddEditAddress, setShowAddEditAddress] = React.useState(false);
    const [selctedAddress, setSelectedAddress] = React.useState(null);
    const [addressList, setAddressList] = React.useState([
        {
            id: 1,
            country: "India",
            fullname: "Vivek Kumar Ghanchi",
            mobile: "9998989899",
            pincode: "307022",
            houseno: 'House no 96',
            area: "Raawal Gali, Pindwara",
            landmark: "Udaipur Road",
            city: 'Pindwara',
            state: "Rajasthan",
            default: true,
        },
        {
            id: 2,
            country: "India",
            fullname: "Pradeep",
            mobile: "3423323232",
            pincode: "400001",
            houseno: 'House no 33',
            area: "Kalbadevi, Mumbai",
            landmark: "Kalbadevi",
            city: 'Mumbai',
            state: "Maharastra",
            default: false,
        }
    ]);

    const removeAddress = (item) => {
        let updatedList = addressList.filter((x) => x.id !== item.id);
        setAddressList(updatedList);
    }

    const editAddress = (item) => {
        setSelectedAddress(item);
        setIsAddNew(false);
        setShowAddEditAddress(true);
    }

    const addAddress = () => {
        const addressListLength = addressList.length;
        if (addressListLength === 5) {
            alert(` You can add a maximum of ${addressListLength} addresses.`);
            return;
        }
        setShowAddEditAddress(true);
        setIsAddNew(true);
    }

    const saveNewAddress = (newAddress, isAddNew) => {
        if (isAddNew) {
            newAddress.id = Math.floor(Math.random() * (1000 - 10 + 1) + 10);
            addressList.push(newAddress);
        } else {
            addressList.forEach((element, index) => {
                if (element.id === newAddress.id) {
                    addressList[index] = newAddress;
                }
            });
        }
        setAddressList(addressList);
        setShowAddEditAddress(false);
    }

    return <>
        {showAddEditAddress && <AddressAddEdit saveNewAddress={saveNewAddress} isAddNew={isAddNew} item={selctedAddress} />}
        {!showAddEditAddress && <><div className="a-box-inner a-padding-extra-large">
            <div id="ya-myab-plus-address-icon" className="a-section a-spacing-none address-plus-icon aok-inline-block"></div>
            <h2 className="a-color-tertiary" onClick={() => addAddress()}>Add address</h2>
        </div>
            {addressList.map((item, index) => {
                return <div key={index}>
                    <AddressItem item={item} />
                    <button onClick={() => editAddress(item)}>Edit</button>
                    <button onClick={() => removeAddress(item)}>Remove</button>
                    <br />
                    <br />
                </div>
            })}
        </>}
    </>
}

export default AddressListing;