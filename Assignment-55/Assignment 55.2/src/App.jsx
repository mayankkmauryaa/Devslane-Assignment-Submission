import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Main from './components/Main'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <ProductDetails/>
    </div>
  )
}

export default App