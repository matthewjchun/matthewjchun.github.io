import React from 'react'
import './Header.css';

function Header() {
    return (
        <>
        <div className='header-wrapper'>
            <div className='header-text'>
                <h1>Matthew J Chun</h1>
                <h3><i>Aspiring Software Engineer in the NY Area</i></h3>
            </div>
            <div className='header-pic'>
                <img className='header-pic' src={process.env.PUBLIC_URL + '/pics/picofme2.png'}/>
            </div>
        </div>
    </>
    )
}

export default Header
