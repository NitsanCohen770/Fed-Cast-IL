import React from 'react'
import Links from '../constants/links'
import Categories from './Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar: React.FC<{ isOpen: boolean; setIsOpen: Function }> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ' hideSidebar'}`}>
      <button
        className="close-btn"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  )
}

export default Sidebar
