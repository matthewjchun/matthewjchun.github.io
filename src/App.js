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
    const slider = this.state.content ? ( <About />) : (<Education />);

    return ( 
      <div className="App">
        <Header />
        <Navigation about={this.state.content} info={(content) => this.setState({content})}/>
        {slider}
      </div>
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


