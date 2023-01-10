import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = props => {


    return (
        <div className='sidebar'>

        <div className='sidebar-menu'>
        <div className='sidebar__item'>
            <Link to="" className='sidebar-meu-li'>Profile</Link>
            <Link to="posts" className='sidebar-meu-li'>Posts</Link>
            <Link to="gallery" className='sidebar-meu-li'>Gallery</Link>
            <Link to="todo" className='sidebar-meu-li'>ToDo</Link>
        </div>
        </div>
        </div>
    )
}

export default Sidebar
