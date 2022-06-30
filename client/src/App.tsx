import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ProviderServiceDetail from './Components/ProviderServiceDetail';


function App() {

  const client = new ApolloClient({
    uri : 'http://localhost:8080/graphql',
    cache : new InMemoryCache()
  })
  return (
    <>
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:serviceid" element={<ProviderServiceDetail/>}/>
      </Routes>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
