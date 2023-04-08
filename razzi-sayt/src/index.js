import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/sass/style.css';
import Navbar2 from './components/Navbar2';
// SolHisse from './components/SolHisse';
//import SagHisse from './components/SagHisse';
import Section from './components/Section';




class App extends Component {
  render(){
    return(<div>
      < Navbar2 />
      {/*< SolHisse />*/}
      {/*< SagHisse />*/}
      < Section />
    </div>)
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

