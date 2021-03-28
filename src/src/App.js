import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import List from './component/List';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
      return(
          <div>
              {/* <Header/> */}
              <h1>Component dari Class App</h1>
              <List/>
              <Footer judul = 'Halaman Footer' nama = 'Rey'></Footer>
          </div>
      );
  }
}

export default App;
