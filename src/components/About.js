import React from 'react'
import './About.css';
// import styled from 'styled-components';


function About() {
    return (
        <div className='total-wrapper'>
            <div className='about-wrapper'>
                <div className='links-wrapper'>
                    <a href='mailto:matthewchun.18@gmail.com'>
                        <img src={process.env.PUBLIC_URL + '/icons/email.svg'} className='icon-link'/>
                    </a>
                    <a href='https://www.linkedin.com/in/matthew-chun-9081401a2/' target='_blank'>
                        <img src={process.env.PUBLIC_URL + '/icons/linkedin.png'} className='icon-link'/>
                   </a>
                    <a href={process.env.PUBLIC_URL + '/doc/Resumev3.pdf'} target='_blank'>
                        <img src={process.env.PUBLIC_URL + '/icons/resume.svg'} className='icon-link'/>
                    </a>
                </div>
               <div className='text-wrapper'>
                    <p>
                    <header className='text-title'><b>Meet Matthew Chun!</b></header>
                    Matthew Chun is currently a third year undergraduate student at Stony Brook University, 
                    pursuing his Bachelor’s Degree in Computer Science. Apart from being in one of the University’s 
                    honors programs and being one of the recipients for the Presidential Scholarship, he is also proud 
                    of being an active member in many of Stony Brook’s on campus clubs and activities. ​Matt loves meeting 
                    new people and adamantly believes that being an active member of any community is the best way to do 
                    that. One of his great passions involves working in teams and producing great results, whether it be 
                    with his field of study or friendly athletic competitions.
                   <br/><br/>
                    Always eager to learn more, Matt always finds joy in studying computer science and hopes to make an impact 
                    on the new and ever evolving technological world.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
