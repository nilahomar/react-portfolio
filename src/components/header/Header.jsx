import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className="intro-left-wrapper">
          <h2 className='intro-hello'>Hello, My name is </h2>
          <h1 className='intro-name'>Nila Homar</h1>
        </div>
      </div>
      <div className='intro-right'>Right</div>
    </div>
  )
}

export default Header