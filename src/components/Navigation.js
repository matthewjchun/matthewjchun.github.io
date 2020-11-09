// rcfe

import React from 'react'
import './Navigation.css';
import styled from 'styled-components';
// import Education from './Education';
// import About from './About';


const Button = styled.button`
    background-color: white;
    color: black;
    min-width: 200px;
    min-height: 50px;
    border: 1px solid #F3F6E1;
    padding: 5px 15px;
    border-radius: 25px;
    outline: 0;
    margin: 0px 10px;
    box-shadow: 0px 2px 2px black;
    cursor: pointer;
    transition: ease color 500ms;
    transition: ease background-color 300ms;
    &:hover{
        color: white;
        background-color:  #E3D8D3;
    }
`

const Navigation = ({about, info}) => {
    return(
        <div className='navigation-wrapper'>
            {/* <div className='navigation-border'>
               <img className='navigation-border' src={process.env.PUBLIC_URL + '/pics/border.png'}/>
            </div> */}
            <div className='navigation-buttons'>
                <Button onClick={() => info(true)}>
                    <b>About</b>
                </Button>
            </div>
            <div className='navigation-buttons'>
                <Button onClick={() => info(false)}>
                    <b>Education</b>
                </Button>
            </div>
            {/* <div className='navigation-border'>
               <img className='navigation-border' src={process.env.PUBLIC_URL + '/pics/border2.png'}/>
            </div> */}
        </div>
    );
}


// class Navigation extends React.Component {
//     state = {
//         about: true
//     };

//     render() {
//         return(
//             <div className='navigation-wrapper'>
//                 <div className='navigation-border'>
//                    <img className='navigation-border' src={process.env.PUBLIC_URL + '/pics/border.png'}/>
//                 </div>
//                 <div className='navigation-buttons'>
//                     <Button onClick={() => {this.setState({about: !this.state.about})}}>
//                         About
//                     </Button>
//                 </div>
//                 <div className='navigation-buttons'>
//                     <Button onClick={() => {this.setState({about: !this.state.about})}}>
//                         Education
//                     </Button>
//                 </div>
//                 <div className='navigation-border'>
//                    <img className='navigation-border' src={process.env.PUBLIC_URL + '/pics/border2.png'}/>
//                 </div>
//             </div>
//         );
//     }
// }

export default Navigation
