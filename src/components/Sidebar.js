import React from 'react'
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.apps.isMenuOpen);
  return (
    <div className={isMenuOpen ? "w-[11vw]": null}>
        <MenuItems />
    </div>
  )
}

export default Sidebar