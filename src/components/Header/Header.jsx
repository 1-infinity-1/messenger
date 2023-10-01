import React from 'react'
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <h1 className={c.logo}>Au</h1>
        </header>
    )
}

export default Header;