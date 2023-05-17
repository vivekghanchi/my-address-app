import React from 'react';

const AddressItem = ({ item }) => {
    return <>
        <div><b>{item.fullname}</b> <br /> </div>
        <div>{item.houseno} <br /> </div>
        <div>{item.area} <br /> </div>
        {item.city && item.state && item.pincode && <div>{item.city}, {item.state} {item.pincode}<br /> </div>}
        <div>{item.country} <br /> </div>
        {item.mobile && <div>Phone no: {item.mobile} <br /> </div>}
    </>
}

export default AddressItem;