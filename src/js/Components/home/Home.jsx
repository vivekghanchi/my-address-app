import React from 'react';

const Home  = ({onChangePage}) => {
    return <div className='address-card-cell' >
      <div className="a-row">
        <div>
          <img alt="Your Addresses" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" />
        </div>
        <div>
          <h2>
            Your Addresses
            </h2>
          <div onClick={() => onChangePage('listing')}><span className="a-color-secondary">Edit addresses for orders and gifts</span></div>
        </div>
      </div>
  </div>
}

export default Home;