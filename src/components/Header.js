import React from 'react'
import './Header.css';

function Header() {
    const subColor = {color: 'grey'};

    return (
        <div className='header-wrapper'>
            <div className='header-text'>
                <h1>Matthew J Chun</h1>
                <p className='header-sub'><h4>Aspiring Software Engineer <br/>in the NY Area</h4></p>
            </div>
            <div className='header-pic'>
                <img className='header-pic' src={process.env.PUBLIC_URL + '/pics/picofme2.png'}/>
            </div>
        </div>
    )
}

export default Header
