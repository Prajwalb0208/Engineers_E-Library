import React from 'react'
import './Home.css'
import BooksGrid from '../../Components/BooksGrid/BooksGrid'
import Header from '../../Components/Header/Header'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  return (
    <div>
      <Header/>
      <BooksGrid/>
      <AppDownload/>
    </div>
  )
}

export default Home