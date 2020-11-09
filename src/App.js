import React, {Component} from "react";
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';



class App extends Component{
  state = {
    content: true
  }


  render() {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    const slider = this.state.content ? ( <About className='About'/>) : (<Education className='Education'/>);

    return ( 
      // <div className='Responsive'>
      <div className="App">
      <div className='block-wrap'>
        <Header className='Head' />
      
        <Navigation className='Navigation' about={this.state.content} info={(content) => this.setState({content})}/>
      </div>
        {slider}
      </div>
      // </div>
    );
  }
}

export default App;

// function App() {
//   return ( 
//     <div className="App">
//       <Header />
//       <Navigation />
//       <About />
//       {/* <Education /> */}
//     </div>
//   );
// }


