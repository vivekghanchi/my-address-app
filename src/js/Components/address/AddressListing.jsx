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

    const setAsDefault = (item) => {
        const updAddresses = addressList.map((x) => {
            if (x.id === item.id) {
                x.default = true;
            } else {
                x.default = false;
            }
            return x;
        });
        setAddressList(updAddresses);
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
        {!showAddEditAddress && <div className={'a-section a-spacing-double-large'}>
            <div className="a-row a-spacing-micro">
                <div className="a-column a-span4 a-spacing-none a-spacing-top-mini address-column">
                    <div className="a-box first-desktop-address-tile" onClick={() => addAddress()}>
                        <div className="a-box-inner a-padding-extra-large">
                            <div id="ya-myab-plus-address-icon" className="a-section a-spacing-none address-plus-icon aok-inline-block"></div>
                            <h2 >Add address</h2>
                        </div>
                    </div>
                </div>
                {addressList.map((item, index) => {
                    return <div className={"a-column a-span4 a-spacing-none a-spacing-top-mini address-column"} key={index}>
                        <div className="a-box a-spacing-none normal-desktop-address-tile">
                            <div className={"a-box-inner a-padding-none"}>
                                {item.default && <div className={"a-section a-spacing-none default-section"}>
                                    <span className="a-size-small a-color-secondary default-line-item">Default</span>
                                    <div id="ya-myab-default-shipping-address-icon" className="a-section a-spacing-none amazon-logo aok-inline-block"></div>
                                </div>}
                                <div className={"a-section address-section-with-default"}>
                                    <div className={"a-row a-spacing-small"}>
                                    </div>
                                    <AddressItem item={item} />
                                </div>
                                <div className="a-row edit-address-desktop-link">
                                    <button onClick={() => editAddress(item)}>Edit</button>
                                    &nbsp; | &nbsp;
                                    <button onClick={() => removeAddress(item)}>Remove</button>
                                    {!item.default && <>&nbsp; | &nbsp;  <button onClick={() => setAsDefault(item)}>Set as Default</button></>}
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        }
    </>
}

export default AddressListing;