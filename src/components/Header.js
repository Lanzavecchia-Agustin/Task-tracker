import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text='Add'
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? '#f05454' : '#00af91'}
        onClick={onAdd}
      />
    </header>
  )
}

export default Header
