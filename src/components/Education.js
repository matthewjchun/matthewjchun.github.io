import React from 'react'
import './Education.css';

function Education() {
    return (
        <div className='total-wrapper'>
        <div className='education-wrapper'>
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
                <p><b>
                Stony Brook University
                <br/>
                B.S. in Computer Science
                <br/>
                Expected Graduation: May 2022   
                <br/><br/>
                Relevant Coursework:</b>
                <table className='spaced-table'>
                    <tr>
                        <td>Data Structures</td>
                        <td>Discrete Mathematics</td>
                    </tr>
                    <tr>
                        <td>Linear Algebra</td>
                        <td>Single Variable Calculus</td>
                    </tr>
                    <tr>
                        <td>CPU Architecture and <br/>C Programming</td>
                        <td>Graph Theory</td>
                    </tr>
                    <tr>
                        <td>Statistics</td>
                        <td>Technical Communication</td>
                    </tr>
                    <tr>
                        <td>Principles of Programming <br/>Languages</td>
                        <td>Probability Theory</td>
                    </tr>
                    <tr>
                        <td>Theory of Computation</td>
                        <td>Legal Issues in Info Systems</td>
                    </tr>
                </table>
                <br/><br/>
                <b>Currently Taking:</b>
                <table className='spaced-table'>
                    <tr>
                        <td>Analysis of Algorithms</td>
                        <td>Programming Abstractions</td>
                    </tr>
                    <tr>
                        <td>Scripting Languages</td>
                    </tr>
                </table>
                </p>
            </div>
        </div>
        </div>
    )
}

export default Education