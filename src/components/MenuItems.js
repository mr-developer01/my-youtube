import React from 'react'
import { useSelector } from 'react-redux'
import LargeMenuItems from './LargMenuItems'
import SmallMenuCard from './SmallMenuCard'

const MenuItems = () => {
  const isMenuOpen = useSelector((store) => store.apps.isMenuOpen);

  if(!isMenuOpen) return <div className='mt-20 pl-1'><SmallMenuCard /></div>; //Early Return
  return (
    <div className='h-[91.5vh] mt-20 overflow-hidden hover:overflow-y-auto'>
      <LargeMenuItems />
      <LargeMenuItems />
      <LargeMenuItems />
      <LargeMenuItems />
      <LargeMenuItems />
      <LargeMenuItems />
      <LargeMenuItems />
    </div>
  )
}

export default MenuItems