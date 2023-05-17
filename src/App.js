import * as React from 'react';
import './App.css';
import AddressListing from '../src/js/Components/address/AddressListing';
import Home from '../src/js/Components/home/Home';


function App() {
  //State
  let [selectedPage, setSelectedPage] = React.useState('home');

  //Events
  const onChangePage = (name) => {
    setSelectedPage(name);
  }

  return (
    <div className="App">
      <header className="App-header" onClick={() => onChangePage("home")}>
        Welcome to the Address App
      </header>
      <section>
        {selectedPage === 'home' && <Home onChangePage={onChangePage} />}
        {selectedPage === 'listing' && <AddressListing />}
      </section>
    </div >
  );
}

export default App;
