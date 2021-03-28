import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Tugas/Login';
import reportWebVitals from './reportWebVitals';


// function HelloComponent() {
//   return "HelloComponent";
// }
// const HelloComponent = () => {
//   return "HelloComponent";
// }

class StateFullComponent extends React.Component {
  render() {
    return <Login />;
  }
}

ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();