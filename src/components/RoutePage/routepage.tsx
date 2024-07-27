import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import MensWear from '../categories/mensWear'
import WomensWear from '../categories/womensWear'
import Jewelary from '../categories/jewelary'
import Electronics from '../categories/electronics'

const RoutePage = () => {
  return (
    <Routes>
    <Route path='/' element={<ItemList  />}/>
    <Route path='/mensclothes' element={<MensWear/>}/>
    <Route path='/womensclothes' element={<WomensWear/>}/>
    <Route path='/jewelary' element={<Jewelary />}/>
    <Route path='/electronics' element={<Electronics />}/>
  </Routes>
  )
}

export default RoutePage