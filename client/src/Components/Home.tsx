import React, { ChangeEvent, useState } from 'react'
import GetProviders from './GetProviders'

function Home(){
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

    return (
        <>
        <div className="App crud-wrapper">
    <div className="jumbotron text-center">
    <img src="logo.png" alt="DD logo" width="150" height="50"/>
      <h1> Provider & Services</h1>
   
    </div>
    <div className="main-content">
      <div className="container">
        <br/>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                <div className="col">
                  <input id= "search-bar" className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search services" onChange={handleInputChange} value={inputValue} />          
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid crud-tab">
        <div className="row grid3 col-container">
          <GetProviders searchText={inputValue}/>
        </div>
      </div>
    </div>
    <footer>
      <div className="text-center">
        <h2>BY DIGNITAS DIGITAL</h2>
      </div>
    </footer>
    </div>
        </>
    )
}

export default Home



