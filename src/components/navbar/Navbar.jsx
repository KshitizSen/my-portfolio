import React from 'react'
import "./Navbar.scss"

const Navbar = () => {

    return (
        <nav className='navbar-main-cnt d-flex'>
            <label className='title'>KSHITIZ</label>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
            <span className='chat d-flex'>
                Lets Chat
                <i class="bi bi-chat-dots-fill"></i>
            </span>

        </nav>
    )
}

export default Navbar