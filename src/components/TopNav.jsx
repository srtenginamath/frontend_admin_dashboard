
import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import './TopNav.css'

import { Link } from 'react-router-dom';




const Topnav = (props) => {

    

    return (
        <div className='topnav'>
            <h1>Profile</h1>
            <div className="topnav__right">
            {/* <img src="" alt=""/> */}
             <div className="topnav__right-item">
               
                    <h6>Leanne Graham</h6>
                </div>
      
            </div>
        </div>
    )
}

export default Topnav
