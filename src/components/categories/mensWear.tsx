import React, { useContext, useState } from 'react'
import MyContext from '../context/context';
import ItemList from '../ItemList/ItemList';

const MensWear = () => {  
  const data = "men's clothing"
  return (
    <ItemList data={data}/>
  )
}

export default MensWear