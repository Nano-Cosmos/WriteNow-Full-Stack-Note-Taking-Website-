import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({searchText,handleSearchText,logout}) => {
  return (
    <>
    <NavBar searchText={searchText} handleSearchText={handleSearchText} logout={logout}/>
    <Outlet/>
    </>
  )
}
export default MainLayout
